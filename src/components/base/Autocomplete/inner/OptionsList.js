import React from 'react';
import colors from "../../../../constants/colors";
import keys from "../../../../constants/keys";
import {isColor} from "../../../../utils/colors";

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

    setHighlighted(hightlightedIndex) {
        const {items} = this.props;

        let hightlightedWord = this.getCurrentWord(items, hightlightedIndex);

        if (hightlightedIndex !== 0 || items.length > 1) {
            this.props.onChangeHighlightedOption(hightlightedWord, hightlightedIndex);
        }

        if (hightlightedIndex === 0) {
            hightlightedWord = '';
        }

        this.setState({
            hightlightedIndex,
            hightlightedWord,
        });
    }

    nudgeHighlighted(delta) {
        const {items} = this.props;
        let {hightlightedIndex} = this.state;
        hightlightedIndex += delta;
        hightlightedIndex = (Math.min(Math.max(0, hightlightedIndex), items.length - 1));

        this.setHighlighted(hightlightedIndex);
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
        width: 120,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    nameHighlighted: {
        color: colors.colorSecondary,
    },
    description: {
        width: 150,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: 12,
        color: colors.colorSecondary,
    }
}

