import React from 'react';
import colors from "../../../../constants/colors";
import keys from "../../../../constants/keys";
import {isColor} from "../../../../utils/colors";
import Log from "../../Log/Log";
import * as config from "../../../../config/config";

const Line = (props) => {
    let style = {...styles.description};

    if (isColor(props.name)) {
        style['backgroundColor'] = props.name;
        style['height'] = 20;
    }

    return <li onMouseOver={props.onMouseOver} style={{...styles.li, ...props.highlighted ? styles.liHighlighted : {}}}>
        <div style={{...styles.name, ...props.highlighted ? styles.nameHighlighted : {}}}>{props.name}</div>
        <div style={style}>{props.description}</div>
    </li>
}

export default class OptionsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hightlightedIndex: 0,
            hightlightedWord: '',
        }

        this.onKeyPress = this.onKeyPress.bind(this);
        this.reset = this.reset.bind(this);
        this.setHighlighted = this.setHighlighted.bind(this);
    }

    reset() {
        this.setHighlighted(0);
    }

    getCurrentWord(items, hightlightedIndex) {
        const item = items[hightlightedIndex],
            {key = ''} = item || {};

        return key;
    }

    componentWillReceiveProps(newProps) {
        const {hightlightedWord, hightlightedIndex} = this.state;
        const newHightlightedWord = this.getCurrentWord(newProps.items, hightlightedIndex);

        if (hightlightedWord !== newHightlightedWord) {
            this.reset();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyPress);
    }

    setHighlighted(index, triggerByArrow) {
        const {items} = this.props;

        const original = this.getCurrentWord(items, index),
            word = index === 0 && items.length === 1 ? '' : original;

        this.setState({
            hightlightedIndex: index,
            hightlightedWord: word,
        });

        this.props.onChangeHighlightedOption({
            word,
            original,
            triggerByArrow
        });
    }

    nudgeHighlighted(delta) {
        const {items} = this.props;
        let {hightlightedIndex} = this.state;
        hightlightedIndex += delta;
        hightlightedIndex = (Math.min(Math.max(0, hightlightedIndex), items.length - 1));

        this.setHighlighted(hightlightedIndex, true);
    }

    onKeyPress(ev) {
        switch (ev.which) {
            case keys.DOWN:
                this.nudgeHighlighted(-1);
                ev.preventDefault();
                break;
            case keys.UP:
                this.nudgeHighlighted(+1);
                ev.preventDefault();
                break;
            default:
                break;
        }
    }


    render() {
        const {items} = this.props;
        const {hightlightedIndex} = this.state;

        return (
            <div style={styles.container}>
                <ul style={styles.ul}>
                    {items.map((item, index) => <Line
                        highlighted={index === hightlightedIndex}
                        key={item.key}
                        name={item.key}
                        description={item.description}/>)}
                </ul>

                {config.debugMode?<Log state={this.state} top={50} />: null}
            </div>
        );
    }
}

const styles = {
    container: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        width: '100%',
        backgroundColor: colors.colorDark,
        color: colors.colorFour,
        boxSizing: 'border-box',
        fontSize: 14,
    },
    ul: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        maxHeight: 265,
        overflow: 'auto',
    },
    li: {
        padding: '2px 3px',
        margin: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    liHighlighted: {
        backgroundColor: colors.colorThird,
        color: colors.colorFour,
    },
    name: {
        width: 140,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    nameHighlighted: {
        color: colors.colorSecondary,
    },
    description: {
        width: 140,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: 12,
        color: colors.colorSecondary,
    }
}

