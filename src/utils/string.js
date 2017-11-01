export const capitalizeNth = (text, n) => {
    return text.slice(0, n) + text.charAt(n).toUpperCase() + text.slice(n + 1)
}


export const capitalizeLastLetter = (text) => {
    return capitalizeNth(text, text.length - 1);
}
