// DL Atoms Tokenization Plugin
// Оптимизированная версия с кэшированием

// =============================================
// КЛЮЧИ ПЕРЕМЕННЫХ были выгружены с помощью плагина export-keys-plugin
// =============================================
const VARIABLE_KEYS = {
    "geometry/padding-h": "40438f2aaeb3a79a6712b6dc3c33c53f31f72634",
    "geometry/padding-v": "8fb39d8585dfe9f829c2e7685a6db6ac2683e957",
    "geometry/gap": "ac2c30f42bd124305f3654493d08a3e290b68edd",
    "geometry/radius": "7be7e21cfe74ad6e31265789f9408bb58893784b",
    "icon/icon-size": "0cd7619782a7aa4ea0e659c77936762ad4e2b836",
    "icon/🔗icon-container": "fe9e709a5a88f08d134399cf901075638434d7b6",
    "icon/🔗help-gap": "cec71d5b2c12212e27509beffd5887852c69c2cd",
    "text/body/🔗main-text-gap": "c8134a9184e164c2e1d1f3d482b8eebba65527ee"
};

// =============================================
// КЛЮЧИ ТЕКСТОВЫХ СТИЛЕЙ
// =============================================
const TEXT_STYLE_KEYS = {
    "main-header": "e7800940afc692b12f94233b57aa213d61740566",
    "main-normal": "d1564ca381483237256eb11d8a2a02fe3a8aacb0",
    "body": "9b697092241d512fc36209954680cfb21c2b9239",
    "caption": "9669e35514a5bb80372cc2d5ffb24ecdbaed09d1"
};

// =============================================
// КЭШ - загружаем всё один раз
// =============================================
let variablesCache = {};
let textStylesCache = {};
let cacheLoaded = false;

// Предзагрузка всех переменных и стилей
async function preloadCache() {
    if (cacheLoaded) return;
    
    // Загружаем переменные параллельно
    const varPromises = Object.entries(VARIABLE_KEYS).map(async ([name, key]) => {
        try {
            const variable = await figma.variables.importVariableByKeyAsync(key);
            if (variable) variablesCache[name] = variable;
        } catch (e) {}
    });
    
    // Загружаем текстовые стили параллельно
    const stylePromises = Object.entries(TEXT_STYLE_KEYS).map(async ([name, key]) => {
        try {
            const style = await figma.importStyleByKeyAsync(key);
            if (style) textStylesCache[name] = style;
        } catch (e) {}
    });
    
    await Promise.all([...varPromises, ...stylePromises]);
    cacheLoaded = true;
}

// Получить переменную из кэша
function getVariable(name) {
    return variablesCache[name] || null;
}

// Получить текстовый стиль из кэша
function getTextStyle(name) {
    return textStylesCache[name] || null;
}

// =============================================
// ПРИМЕНЕНИЕ ТОКЕНОВ
// =============================================

async function applyTokenMapping() {
    const selection = figma.currentPage.selection;
    
    if (selection.length === 0) {
        throw new Error('Выберите элемент для применения токенов');
    }
    
    const node = selection[0];
    
    // Предзагружаем кэш один раз
    await preloadCache();
    
    // Проверяем что хотя бы что-то загрузилось
    if (Object.keys(variablesCache).length === 0) {
        throw new Error('Не удалось загрузить переменные из библиотеки');
    }
    
    // Счётчик текстов для определения первый/остальные
    let textCounter = { count: 0 };
    
    // Применяем токены
    await applyTokensToNode(node, textCounter);
    
    figma.notify('Компонент размечен базовым скином', { timeout: 3000 });
    return { success: true };
}

// Применение токенов к ноде
async function applyTokensToNode(node, textCounter) {
    // Пропускаем инстансы (кроме иконок)
    if (node.type === 'INSTANCE' && !isIconInstance(node)) {
        return;
    }
    
    // Применяем токены контейнера к корневому элементу
    applyContainerTokens(node);
    
    // Рекурсивно обрабатываем детей
    if ('children' in node) {
        for (const child of node.children) {
            await processNodeRecursively(child, textCounter);
        }
    }
}

// Рекурсивная обработка
async function processNodeRecursively(node, textCounter) {
    // Пропускаем инстансы (кроме иконок)
    if (node.type === 'INSTANCE' && !isIconInstance(node)) {
        return;
    }
    
    // Icon instance - проверяем/создаём контейнер и применяем токены
    if (isIconInstance(node)) {
        ensureIconContainer(node);
        return; // Не обрабатываем детей иконки
    }
    
    // Фреймы с autolayout - применяем gap (с учётом приоритетов)
    if (node.layoutMode && node.layoutMode !== 'NONE') {
        applySmartGap(node);
    }
    
    // Текстовые элементы - первый = main-normal, остальные = body
    if (node.type === 'TEXT') {
        textCounter.count++;
        if (textCounter.count === 1) {
            await applyTextStyle(node, 'main-normal');
        } else {
            await applyTextStyle(node, 'body');
        }
    }
    
    // Рекурсия для детей
    if ('children' in node) {
        for (const child of node.children) {
            await processNodeRecursively(child, textCounter);
        }
    }
}

// Токены контейнера (padding, radius, gap)
function applyContainerTokens(node) {
    if (!node.setBoundVariable) return;
    
    const paddingH = getVariable('geometry/padding-h');
    const paddingV = getVariable('geometry/padding-v');
    const gap = getVariable('geometry/gap');
    const radius = getVariable('geometry/radius');
    
    if (paddingH) {
        try {
            node.setBoundVariable('paddingLeft', paddingH);
            node.setBoundVariable('paddingRight', paddingH);
        } catch (e) {}
    }
    
    if (paddingV) {
        try {
            node.setBoundVariable('paddingTop', paddingV);
            node.setBoundVariable('paddingBottom', paddingV);
        } catch (e) {}
    }
    
    if (gap && node.layoutMode && node.layoutMode !== 'NONE') {
        try {
            node.setBoundVariable('itemSpacing', gap);
        } catch (e) {}
    }
    
    if (radius) {
        try {
            node.setBoundVariable('cornerRadius', radius);
        } catch (e) {}
    }
}

// Умный выбор gap с учётом приоритетов
function applySmartGap(node) {
    if (!node.setBoundVariable) return;
    if (!('children' in node)) return;
    
    // Приоритет 1: Help иконка рядом с текстом → help-gap
    if (hasHelpIconWithText(node)) {
        const helpGap = getVariable('icon/🔗help-gap');
        if (helpGap) {
            try {
                node.setBoundVariable('itemSpacing', helpGap);
            } catch (e) {}
            return;
        }
    }
    
    // Приоритет 2: Вертикальный autolayout с 2+ текстами → main-text-gap
    if (node.layoutMode === 'VERTICAL' && hasMultipleTexts(node)) {
        const textGap = getVariable('text/body/🔗main-text-gap');
        if (textGap) {
            try {
                node.setBoundVariable('itemSpacing', textGap);
            } catch (e) {}
            return;
        }
    }
    
    // По умолчанию: обычный gap
    const gap = getVariable('geometry/gap');
    if (gap) {
        try {
            node.setBoundVariable('itemSpacing', gap);
        } catch (e) {}
    }
}

// Проверка - есть ли Help иконка рядом с текстом
function hasHelpIconWithText(node) {
    if (!('children' in node)) return false;
    
    let hasHelp = false;
    let hasText = false;
    
    for (const child of node.children) {
        // Проверяем прямых детей
        if (child.type === 'TEXT') {
            hasText = true;
        }
        // Проверяем иконку Help (может быть внутри контейнера)
        if (isHelpIconOrContainer(child)) {
            hasHelp = true;
        }
    }
    
    return hasHelp && hasText;
}

// Проверка - это Help иконка или контейнер с Help иконкой
function isHelpIconOrContainer(node) {
    // Прямая иконка Help
    if (isIconInstance(node) && isHelpIcon(node)) {
        return true;
    }
    // Контейнер с иконкой Help внутри
    if ('children' in node) {
        for (const child of node.children) {
            if (isIconInstance(child) && isHelpIcon(child)) {
                return true;
            }
        }
    }
    return false;
}

// Проверка - это иконка Help
function isHelpIcon(node) {
    if (!isIconInstance(node)) return false;
    
    try {
        const mainComponent = node.mainComponent;
        const componentName = (mainComponent && mainComponent.name) ? mainComponent.name.toLowerCase() : '';
        const nodeName = (node.name || '').toLowerCase();
        
        return componentName.includes('help') || 
               componentName.includes('question') ||
               nodeName.includes('help') ||
               nodeName.includes('question');
    } catch (e) {
        return false;
    }
}

// Проверка - есть ли в ноде минимум 2 текстовых элемента
function hasMultipleTexts(node) {
    if (!('children' in node)) return false;
    
    let textCount = 0;
    for (const child of node.children) {
        if (child.type === 'TEXT') {
            textCount++;
            if (textCount >= 2) return true;
        }
    }
    return false;
}

// Icon container height
function applyIconContainerToken(node) {
    if (!node.setBoundVariable) return;
    
    const iconContainer = getVariable('icon/🔗icon-container');
    if (iconContainer) {
        try {
            node.setBoundVariable('height', iconContainer);
        } catch (e) {}
    }
}

// Проверяем и создаём контейнер для иконки
function ensureIconContainer(iconNode) {
    const parent = iconNode.parent;
    
    // Проверяем, является ли родитель autolayout с ТОЛЬКО иконкой внутри
    if (parent && parent.layoutMode && parent.layoutMode !== 'NONE') {
        // Если в родителе только одна иконка - это уже контейнер иконки
        if (parent.children.length === 1) {
            applyIconContainerToken(parent);
            return;
        }
        // Иначе родитель - общий контейнер, нужно обернуть иконку
    }
    
    // Нужно обернуть иконку в новый контейнер
    const container = figma.createFrame();
    container.name = 'iconContainer';
    
    // Настраиваем autolayout
    container.layoutMode = 'HORIZONTAL';
    container.primaryAxisSizingMode = 'AUTO';
    container.counterAxisSizingMode = 'AUTO';
    container.paddingTop = 0;
    container.paddingBottom = 0;
    container.paddingLeft = 0;
    container.paddingRight = 0;
    container.itemSpacing = 0;
    container.fills = [];
    
    // Выравнивание по центру
    container.primaryAxisAlignItems = 'CENTER';
    container.counterAxisAlignItems = 'CENTER';
    
    // Вставляем контейнер на место иконки
    if (parent) {
        const index = parent.children.indexOf(iconNode);
        parent.insertChild(index, container);
    }
    
    // Перемещаем иконку в контейнер
    container.appendChild(iconNode);
    
    // Применяем токен к контейнеру
    applyIconContainerToken(container);
}

// Icon size - применяем токен к пропсу Size иконки
function applyIconSizeToken(node) {
    const iconSize = getVariable('icon/icon-size');
    if (!iconSize || !node.setBoundVariable) return;
    
    try {
        // Получаем определения component properties
        const propDefs = node.componentPropertyDefinitions;
        if (propDefs) {
            // Ищем пропс Size
            for (const [defId, def] of Object.entries(propDefs)) {
                if (def.type === 'VARIANT' && defId.toLowerCase().includes('size')) {
                    // Для variant - пробуем установить через setProperties
                    // (переменные не поддерживаются для variants)
                    continue;
                }
                // Для числовых пропсов - привязываем переменную
                if (defId.toLowerCase().includes('size')) {
                    node.setBoundVariable(`componentProperties/${defId}`, iconSize);
                    return;
                }
            }
        }
        
        // Альтернатива: ищем в componentProperties
        const props = node.componentProperties;
        if (props) {
            for (const propName of Object.keys(props)) {
                if (propName.toLowerCase().includes('size')) {
                    node.setBoundVariable(`componentProperties/${propName}`, iconSize);
                    return;
                }
            }
        }
    } catch (e) {}
    
    // Fallback: применяем к width/height
    try {
        node.setBoundVariable('width', iconSize);
        node.setBoundVariable('height', iconSize);
    } catch (e) {}
}

// Применение текстового стиля
async function applyTextStyle(textNode, styleName) {
    const style = getTextStyle(styleName);
    if (!style) return false;
    
    try {
        await figma.loadFontAsync(style.fontName);
        textNode.textStyleId = style.id;
        return true;
    } catch (e) {
        return false;
    }
}

// Проверка - это иконка из библиотеки !💎 Icons
// Критерии: remote инстанс с пропсами Size, Filled, Thin
// Проверка - это иконка из библиотеки !💎 Icons
// Критерии: remote instance + пропс Size + квадратные размеры (12, 16, 20, 24)
function isIconInstance(node) {
    if (node.type !== 'INSTANCE') return false;
    
    try {
        const mainComponent = node.mainComponent;
        if (!mainComponent || !mainComponent.remote) return false;
        
        // Критерий 1: квадратные размеры из набора 12, 16, 20, 24
        const iconSizes = [12, 16, 20, 24];
        const width = Math.round(node.width);
        const height = Math.round(node.height);
        const isSquare = width === height;
        const isIconSize = iconSizes.includes(width);
        
        if (isSquare && isIconSize) {
            return true;
        }
        
        // Критерий 2: есть пропс Size
        const props = node.componentProperties;
        if (props) {
            const propNames = Object.keys(props).map(p => p.toLowerCase());
            const hasSize = propNames.some(p => p.includes('size'));
            if (hasSize) {
                return true;
            }
        }
        
        return false;
    } catch (e) {
        return false;
    }
}

// =============================================
// UI
// =============================================

figma.ui.onmessage = async (msg) => {
    try {
        if (msg.type === 'map-tokens') {
            const result = await applyTokenMapping();
            figma.ui.postMessage({ type: 'tokens-mapped', data: result });
        }
    } catch (error) {
        figma.ui.postMessage({ type: 'error', message: error.message });
    }
};

figma.showUI(__html__, { width: 300, height: 200 });
