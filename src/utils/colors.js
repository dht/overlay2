
// https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
export const isColor = (text = '') => {
    return text.search(/^#(?:[0-9a-fA-F]{3}){1,2}$/) === 0;
}
