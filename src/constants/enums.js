export const arrayToEnum = (arr) => {
    return arr.reduce((output, key) => {
        output[key] = key;
        return output;
    }, {})
}

export const fontWeightENum = arrayToEnum(['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']);

export const fontStyleEnum = arrayToEnum(['normal', 'italic', 'oblique']);

export const fontStretchEnum = arrayToEnum([
    'ultra-condensed',
    'extra-condensed',
    'condensed',
    'semi-condensed',
    'normal',
    'semi-expanded',
    'expanded',
    'extra-expanded',
    'ultra-expanded'
]);


export const displayEnum = {
    "block": "block",
    "inline": "inline",
    "run-in": "run-in",
    "flow": "flow",
    "flow-root": "flow-root",
    "table": "table",
    "flex": "flex",
    "grid": "grid",
    "ruby": "ruby",
    "subgrid": "subgrid",
    "block flow": "block flow",
    "inline table": "inline table",
    "flex run-in": "flex run-in",
    "list-item": "list-item",
    "list-item block": "list-item block",
    "list-item inline": "list-item inline",
    "list-item flow": "list-item flow",
    "list-item flow-root": "list-item flow-root",
    "list-item block flow": "list-item block flow",
    "list-item block flow-root": "list-item block flow-root",
    "flow list-item block": "flow list-item block",
    "table-row-group": "table-row-group",
    "table-header-group": "table-header-group",
    "table-footer-group": "table-footer-group",
    "table-row": "table-row",
    "table-cell": "table-cell",
    "table-column-group": "table-column-group",
    "table-column": "table-column",
    "table-caption": "table-caption",
    "ruby-base": "ruby-base",
    "ruby-text": "ruby-text",
    "ruby-base-container": "ruby-base-container",
    "ruby-text-container": "ruby-text-container",
    "contents": "contents",
    "none": "none",
    "inline-block": "inline-block",
    "inline-table": "inline-table",
    "inline-flex": "inline-flex",
    "inline-grid": "inline-grid",
}

export const textTransformEnum = arrayToEnum([
    "capitalize",
    "uppercase",
    "lowercase",
    "none",
    "full-width"
]);


export const justifyContentEnum = arrayToEnum(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']);

export const alignItemsEnum = arrayToEnum(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']);

export const alignContentEnum = arrayToEnum(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']);

export const alignSelfEnum = arrayToEnum(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']);

export const flexDirectionEnum = arrayToEnum(['row', 'row-reverse', 'column', 'column-reverse']);

export const flexWrapEnum = arrayToEnum(['nowrap', 'wrap', 'wrap-reverse']);

export const overflowEnum = arrayToEnum(['hidden', 'visible', 'auto', 'scroll']);

export const positionEnum = arrayToEnum(['static', 'relative', 'absolute', 'fixed', 'sticky']);

export const textAlignEnum = arrayToEnum(['left', 'center', 'right', 'justify', 'justify-all', 'start', 'end', ' match-parent']);

export const backgroundSizeEnum = arrayToEnum(['contain', 'cover']);

export const backgroundRepeatEnum = arrayToEnum(['no-repeat', 'repeat', 'repeat-x', 'repeat-y']);

export const backgroundPositionEnum = arrayToEnum(['top', 'top left', 'top right', 'center', 'center left', 'center right', 'bottom', 'bottom left', 'bottom right']);