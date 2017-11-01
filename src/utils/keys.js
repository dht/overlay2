import keys from "../constants/keys";

export const isSpecialKey = (key) =>
    [keys.BACKSPACE, keys.TAB, keys.ENTER, keys.SPACE, keys.ESCAPE].indexOf(key) >= 0;

export const isAlphaNumeric = (key) => {
    return (key >= 65 && key <= 90) ||
        (key >= 48 && key <= 57)
}