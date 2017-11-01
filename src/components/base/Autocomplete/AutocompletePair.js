import React from 'react';
import colors from "../../../constants/colors";
import keys from "../../../constants/keys";
// import AutocompleteInput from "./AutocompleteEditable";
import AutocompleteInput from "./AutocompleteInput";
import {capitalizeLastLetter} from "../../../utils/string";

export default class AutocompletePair extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            minimumCharactersToCalc: 1,
            mustFit: false,
            capitalizeToFit: true,
            solid: '',
            liquid: '',
        }

        this.findRelevantWord = this.findRelevantWord.bind(this);
        this.onSpecialKey = this.onSpecialKey.bind(this);
        this.recalc = this.recalc.bind(this);
    }

    clear() {
        this.setState({
            solid: '',
            liquid: '',
            word: '',
        });

        this.props.onChange('');
        this.props.onClear();
    }

    findRelevantWord(solid) {
        const {words} = this.props;

        return words.reduce((output, word) => {
            return (!output && word.indexOf(solid) === 0) ? word : output;
        }, '');
    }

    wordMinusSolid(solid, word) {
        const {minimumCharactersToCalc} = this.state;

        if (solid.length < minimumCharactersToCalc) {
            return '';
        }

        return word.substr(solid.length);
    }

    completeTillUppercase() {
        let {solid, liquid} = this.state,
            nextUppercaseIndex = liquid.search(/[A-Z]/);

        if (nextUppercaseIndex === 0) {
            nextUppercaseIndex = liquid.substr(1).search(/[A-Z]/) + 1;
        }

        if (nextUppercaseIndex > 0) {
            solid += liquid.substr(0, nextUppercaseIndex);
        } else if (liquid.length) {
            solid += liquid;
        }

        this.recalc(solid);
    }

    completeAll() {
        const {word} = this.state;

        this.recalc(word);
    }

    onSpecialKey(key) {
        switch (key) {
            case keys.BACKSPACE:
                this.onDeleteCharacter();
                break;
            case keys.TAB:
                this.completeTillUppercase();
                break;
            case keys.ENTER:
                this.completeAll();
                this.props.onAddWord(this.state.word || this.state.solid);
                this.clear();
                break;
            case keys.SPACE:
                break;
            case keys.ESCAPE:
                break;
            default:
                break;
        }
    }

    recalc(solid, ignoreIfEmpty) {
        let word = this.findRelevantWord(solid),
            liquid = this.wordMinusSolid(solid, word);

        if (ignoreIfEmpty && !word) {
            return;
        }
        this.setState({
            solid,
            liquid,
            word,
        });

        this.props.onChange(solid);

        if (!word && !ignoreIfEmpty) {
            this.recalc(capitalizeLastLetter(solid), true);
        }
    }

    onDeleteCharacter() {
        let {solid} = this.state;

        if (solid.length === 0) {
            this.props.onRemoveWord();
        }
    }

    render() {
        const {solid, liquid} = this.state;

        return (
            <div onClick={this.focus}
                 style={styles.container}>
                <div style={styles.pair}>
                    <AutocompleteInput
                        value={solid}
                        onChange={this.recalc}
                        onSpecialKey={this.onSpecialKey}
                    />
                    <div style={styles.liquid}>{liquid}</div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'white',
        fontSize: 20,
        boxSizing: 'border-box',
        height: 40,
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        color: colors.colorThird,
    },
    pair: {
        display: 'flex',
        flexDirection: 'row',
    },
    liquid: {
        color: colors.colorThird,
        fontWeight: 100,
        marginLeft: 0,
    },
}

