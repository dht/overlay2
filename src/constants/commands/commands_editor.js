import * as enums from "../enums";

export default  {
    addText: {
        key: 'addText',
        structure: 'addText text?',
        description:'add a text',
        parameters: [
            {
                text: 'string'
            }
        ]
    },
    addPlaceholder: {
        key: 'addPlaceholder',
        description:'add a placeholder',
    },
    addImage: {
        key: 'addImage',
        structure: 'addImage imageUrl?',
        description:'add an image',
        parameters: [
            {
                imageUrl: 'url'
            }
        ]
    },
    addVerticalViews: {
        key: 'addVerticalViews',
        structure: 'addVerticalViews numberOfViews',
        description:'add several rows',
        parameters: [
            {
                numberOfViews: 'numeric'
            }
        ]
    },
    addHorizontalViews: {
        key: 'addHorizontalViews',
        structure: 'addHorizontalViews numberOfViews',
        description:'add several columns',
        parameters: [
            {
                numberOfViews: 'numeric'
            }
        ]
    },
    splitView: {
        key: 'splitView',
        structure: 'splitView size1 size2',
        description:'split selected view',
        parameters: [
            {
                size1: 'numeric'
            },
            {
                size2: 'numeric'
            }
        ]
    },
    setSelected: {
        key: 'setSelected',
        structure: 'setSelected id',
        description:'change selected element',
        parameters: [
            {
                id: 'numeric'
            }
        ]
    },
    bold: {
        key: 'bold',
        description:'make selected bold',
    },
    delete: {
        key: 'delete',
        description:'delete selected',
    },
    drillDown: {
        key: 'drillDown',
        description:'drill down to selected',
    },
    popUp: {
        key: 'popUp',
        description:'pop up from current',
    },
    replaceWithAbove: {
        key: 'replaceWithAbove',
        description:'replace selected with element above',
    },
    replaceWithBelow: {
        key: 'replaceWithBelow',
        description:'replace selected with element below',
    },
    copy: {
        key: 'copy',
        description:'copy selected element and style',
    },
    paste: {
        key: 'paste',
        description:'paste saved element or style',
    },
    undo: {
        key: 'undo',
        description:'undo last action',
    },
    stepIn: {
        key: 'stepIn',
        description:'step in to group',
    },
    stepOut: {
        key: 'stepOut',
        description:'step out from group',
    },
    stepLeft: {
        key: 'stepLeft',
        description:'step left from selected',
    },
    stepDown: {
        key: 'stepDown',
        description:'step down from selected',
    },
    stepRight: {
        key: 'stepRight',
        description:'step right from selected',
    },
    stepUp: {
        key: 'stepUp',
        description:'step up from selected',
    },
    createSnippet: {
        key: 'createSnippet',
        structure: 'createSnippet snippetName',
        description:'create a new snippet',
        parameters: [
            {
                snippetName: 'string'
            }
        ]
    },
    zoom: {
        key: 'zoom',
        structure: 'zoom value',
        description:'zoom viewport',
        parameters: [
            {
                value: enums.zoomEnum
            }
        ]
    },
    setVariable: {
        key: 'setVariable',
        structure: 'setVariable varName varType',
        description:'set variable for selected',
        parameters: [
            {
                varName: 'string'
            },
            {
                value: enums.varTypeEnum
            }
        ]
    },
    setStyleVariable: {
        key: 'setStyleVariable',
        structure: 'setStyleVariable varName cssKey',
        description:'set style-variable for selected',
        parameters: [
            {
                varName: 'string'
            },
            {
                cssKey: enums.cssKeysEnum
            }
        ]
    }
}