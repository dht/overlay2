export default  {
    addText: {
        key: 'addText',
        description:'add a text',
    },
    addPlaceholder: {
        key: 'addPlaceholder',
        description:'add a placeholder',
    },
    addImage: {
        key: 'addImage',
        description:'add an image',
    },
    addView: {
        key: 'addView',
        description:'add a view',
    },
    addViews: {
        key: 'addViews',
        structure: 'addViews numberOfViews',
        description:'add several views',
        parameters: [
            {
                numberOfViews: 'numeric'
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
    }
}