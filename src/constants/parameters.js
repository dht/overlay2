const _getParameterKey = (parameter) => {
    return Object.keys(parameter)[0];
}

export const enumToWords = (enumObject) => {
    return Object.keys(enumObject).sort();
}

export const enumToOptions = (enumObject) => {
    return Object.keys(enumObject).map(key => ({
        key,
        description: ''
    }));
}

export const paramToOptions = (parameter) => {
    const key = _getParameterKey(parameter),
        paramType = parameter[key];

    switch (paramType) {
        case 'numeric':
            return [];

        case 'size':
        case 'value':
        case 'color':
        case 'string':
            return [];

        default:
            return enumToOptions(paramType);
    }
}

export const paramToWords = (parameter) => {
    const key = _getParameterKey(parameter),
        paramType = parameter[key];

    switch (paramType) {
        case 'numeric':
            return [];

        case 'size':
        case 'value':
        case 'color':
        case 'string':
            return [];

        default:
            return enumToWords(paramType);
    }
}