import fonts from "../fonts";
import * as enums from "../enums";
import {colorsToParams} from "../../utils/parameters";
import colorsEditor from "../colorsEditor";

export default    {
    width: {
        key: 'width',
        structure: 'width size',
        description: 'width for selected',
        parameters: [
            {
                size: 'size'
            }
        ]
    },
    height: {
        key: 'height',
        structure: 'height size',
        description: 'height for selected',
        parameters: [
            {
                size: 'size'
            }
        ]
    },
    backgroundColor: {
        key: 'backgroundColor',
        structure: 'backgroundColor color',
        description: 'backgroundColor for selected',
        parameters: [
            {
                color: colorsToParams(colorsEditor)
            }
        ]
    },
    backgroundImage: {
        key: 'backgroundImage',
        structure: 'backgroundImage url',
        description: 'backgroundImage for selected',
        parameters: [
            {
                url: 'url'
            }
        ]
    },
    backgroundSize: {
        key: 'backgroundSize',
        structure: 'backgroundSize size',
        description: 'backgroundSize for selected',
        parameters: [
            {
                size: enums.backgroundSizeEnum
            }
        ]
    },
    backgroundRepeat: {
        key: 'backgroundRepeat',
        structure: 'backgroundRepeat repeat',
        description: 'backgroundRepeat for selected',
        parameters: [
            {
                repeat: enums.backgroundRepeatEnum
            }
        ]
    },
    backgroundPosition: {
        key: 'backgroundPosition',
        structure: 'backgroundPosition position',
        description: 'backgroundPosition for selected',
        parameters: [
            {
                position: enums.backgroundPositionEnum
            }
        ]
    },
    fontStyle: {
        key: 'fontStyle',
        structure: 'fontStyle style',
        description: 'fontStyle for selected',
        parameters: [
            {
                style: enums.fontStyleEnum
            }
        ]
    },
    textAlign: {
        key: 'textAlign',
        structure: 'textAlign align',
        description: 'textAlign for selected',
        parameters: [
            {
                align: enums.textAlignEnum
            }
        ]
    },
    textTransform: {
        key: 'textTransform',
        structure: 'textTransform align',
        description: 'text-transform for selected',
        parameters: [
            {
                align: enums.textTransformEnum
            }
        ]
    },
    lineHeight: {
        key: 'lineHeight',
        structure: 'lineHeight size',
        description: 'lineHeight for selected',
        parameters: [
            {
                size: 'size'
            }
        ]
    },
    flex: {
        key: 'flex',
        structure: 'flex value',
        description: 'flex for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    order: {
        key: 'order',
        structure: 'order value',
        description: 'order for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    borderRadius: {
        key: 'borderRadius',
        structure: 'borderRadius size',
        description: 'borderRadius for selected',
        parameters: [
            {
                size: 'size'
            }
        ]
    },
    boxShadow: {
        key: 'boxShadow',
        structure: 'boxShadow offsetX offsetY blurRadius spreadRadius color',
        description: 'boxShadow for selected',
        parameters: [
            {
                offsetX: 'size'
            },
            {
                offsetY: 'size'
            },
            {
                blurRadius: 'size'
            },
            {
                spreadRadius: 'size'
            },
            {
                color: colorsToParams(colorsEditor)
            }
        ]
    },
    textShadow: {
        key: 'textShadow',
        structure: 'textShadow offsetX offsetY blurRadius color',
        description: 'textShadow for selected',
        parameters: [
            {
                offsetX: 'size'
            },
            {
                offsetY: 'size'
            },
            {
                blurRadius: 'size'
            },
            {
                color: colorsToParams(colorsEditor)
            }
        ]
    },
    border: {
        key: 'border',
        structure: 'border borderWidth borderType borderColor',
        description: 'order for selected',
        parameters: [
            {
                borderWidth: 'size'
            },
            {
                borderType: 'borderType'
            },
            {
                borderColor: colorsToParams(colorsEditor)
            }
        ]
    },
    color: {
        key: 'color',
        structure: 'color fontColor',
        description: 'font-color for selected',
        parameters: [
            {
                fontColor: colorsToParams(colorsEditor)
            }
        ]
    },
    paddingTop: {
        key: 'paddingTop',
        structure: 'paddingTop value',
        description: 'padding-top for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    paddingRight: {
        key: 'paddingRight',
        structure: 'paddingRight value',
        description: 'padding-right for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    paddingBottom: {
        key: 'paddingBottom',
        structure: 'paddingBottom value',
        description: 'padding-bottom for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    paddingLeft: {
        key: 'paddingLeft',
        structure: 'paddingLeft value',
        description: 'padding-left for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    marginTop: {
        key: 'marginTop',
        structure: 'marginTop value',
        description: 'margin-top for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    marginRight: {
        key: 'marginRight',
        structure: 'marginRight value',
        description: 'margin-right for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    marginBottom: {
        key: 'marginBottom',
        structure: 'marginBottom value',
        description: 'margin-bottom for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    marginLeft: {
        key: 'marginLeft',
        structure: 'marginLeft value',
        description: 'margin-left for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    borderTop: {
        key: 'borderTop',
        structure: 'borderTop value',
        description: 'border-top for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    borderRight: {
        key: 'borderRight',
        structure: 'borderRight value',
        description: 'border-right for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    borderBottom: {
        key: 'borderBottom',
        structure: 'borderBottom value',
        description: 'border-bottom for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    borderLeft: {
        key: 'borderLeft',
        structure: 'borderLeft value',
        description: 'border-left for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    padding: {
        key: 'padding',
        structure: 'padding value',
        description: 'padding for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    margin: {
        key: 'margin',
        structure: 'margin value',
        description: 'margin for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    flexDirection: {
        key: 'flexDirection',
        structure: 'flexDirection value',
        description: 'flex-direction for selected',
        parameters: [
            {
                value: enums.flexDirectionEnum
            }
        ]
    },
    flexWrap: {
        key: 'flexWrap',
        structure: 'flexWrap value',
        description: 'flex-wrap for selected',
        parameters: [
            {
                value: enums.flexWrapEnum
            }
        ]
    },
    justifyContent: {
        key: 'justifyContent',
        structure: 'justifyContent value',
        description: 'justify-content for selected',
        parameters: [
            {
                value: enums.justifyContentEnum
            }
        ]
    },
    alignItems: {
        key: 'alignItems',
        structure: 'alignItems value',
        description: 'align-items for selected',
        parameters: [
            {
                value: enums.alignItemsEnum
            }
        ]
    },
    alignContent: {
        key: 'alignContent',
        structure: 'alignContent value',
        description: 'align-content for selected',
        parameters: [
            {
                value: enums.alignContentEnum
            }
        ]
    },
    alignSelf: {
        key: 'alignSelf',
        structure: 'alignSelf value',
        description: 'align-self for selected',
        parameters: [
            {
                value: enums.alignSelfEnum
            }
        ]
    },
    letterSpacing: {
        key: 'letterSpacing',
        structure: 'letterSpacing value',
        description: 'letter-spacing for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    display: {
        key: 'display',
        structure: 'display value',
        description: 'display for selected',
        parameters: [
            {
                value: enums.displayEnum
            }
        ]
    },
    position: {
        key: 'position',
        structure: 'position value',
        description: 'position for selected',
        parameters: [
            {
                value: enums.positionEnum
            }
        ]
    },
    top: {
        key: 'top',
        structure: 'top value',
        description: 'top for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    right: {
        key: 'right',
        structure: 'right value',
        description: 'right for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    bottom: {
        key: 'bottom',
        structure: 'bottom value',
        description: 'bottom for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    left: {
        key: 'left',
        structure: 'left value',
        description: 'left for selected',
        parameters: [
            {
                value: 'value'
            }
        ]
    },
    overflow: {
        key: 'overflow',
        structure: 'overflow value',
        description: 'overflow for selected',
        parameters: [
            {
                value: enums.overflowEnum
            }
        ]
    },
    fontFamily: {
        key: 'fontFamily',
        structure: 'fontFamily family',
        description: 'font-family for selected',
        parameters: [
            {
                family: fonts
            }
        ]
    },
    fontSize: {
        key: 'fontSize',
        structure: 'fontSize size',
        description: 'font-size for selected',
        parameters: [
            {
                size: enums.fontSizeEnum
            }
        ]
    },
    fontWeight: {
        key: 'fontWeight',
        structure: 'fontWeight weight',
        description: 'font-weight for selected',
        parameters: [
            {
                weight: enums.fontWeightENum,
            },
          ]
    },
}


