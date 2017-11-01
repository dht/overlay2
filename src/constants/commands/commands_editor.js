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
    bold: {
        key: 'bold',
        description:'make selected bold',
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
}