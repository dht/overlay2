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
    })).sort(function (a, b) {
        if (a.key === b.key) return 0;
        return a.key > b.key ? 1 : -1;
    })
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
        case 'url':
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
        case 'url':
            return [];

        default:
            return enumToWords(paramType);
    }
}

export const colorsToParams = (colors) => {
   return Object.keys(colors).reduce((output, key) => {
       output[colors[key]] = colors[key];
       return output;
   }, {})
}