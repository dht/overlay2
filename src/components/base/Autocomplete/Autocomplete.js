import React from 'react';
import './Autocomplete.css';
import colors from "../../../constants/colors";
import {setEndOfContenteditable} from "../../../utils/cursor";
import {playSound} from "../../../utils/sound";
import {soundForKey} from "../../../constants/sounds";
import {isAlphaNumeric, isSpecialKey} from "../../../utils/keys";
import keys from "../../../constants/keys";

export default class Autocomplete extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            minimumCharactersToCalc:2,
            solid: '',
            liquid: '',
            words: ['fontSize', 'fontWeight', 'bigFreakingNumberIsHere','pixel', 'pixem', 'findAll', 'findOne']
        }

        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.findRelevantWord = this.findRelevantWord.bind(this);
        this.specialKey = this.specialKey.bind(this);
        this.focus = this.focus.bind(this);
    }

    focus() {
        this._input.focus();
    }

    componentWillReceiveProps(newProps) {
    }

    componentDidMount() {
        this.focus();
    }

    findRelevantWord(solid) {
        const {words} = this.state;

        return words.reduce((output, word) => {
            return word.indexOf(solid) === 0 ? word : output;
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

    specialKey(key) {

        switch (key) {
            case keys.BACKSPACE:
                this.onDeleteCharacter();
                break;
            case keys.TAB:
                this.completeTillUppercase();
                break;
            case keys.ENTER:
                break;
            case keys.SPACE:
                break;
            case keys.ESCAPE:
                break;
        }
    }

    onKeyDown(ev) {
        const acceptedKey = isAlphaNumeric(ev.which),
            specialKey = isSpecialKey(ev.which);

        if (acceptedKey || specialKey) {
            playSound(soundForKey(ev.which));
        }

        if (!acceptedKey) {
            ev.preventDefault();
        }

        if (specialKey) {
            this.specialKey(ev.which);
        }
    }

    recalc(solid) {
        const word = this.findRelevantWord(solid),
            liquid = this.wordMinusSolid(solid, word);

        this.setState({
            solid,
            liquid,
            word,
        });

        setEndOfContenteditable(this._input);
    }

    onChange() {
        const solid = this._input.innerHTML;
        this.recalc(solid);
    }

    onDeleteCharacter() {
        let {solid} = this.state;
        this.recalc(solid.substr(0, solid.length - 1));
    }

    render() {
        const {solid, liquid} = this.state;

        return (
            <div onClick={this.focus}
                style={styles.container} className="Autocomplete-container">
                <div style={styles.pair}>
                    <div ref={(c) => this._input = c}
                         style={styles.solid}
                         onKeyDown={this.onKeyDown}
                         onInput={this.onChange}
                         onBlur={this.onChange}
                         contentEditable={true}
                         spellCheck={false}
                         suppressContentEditableWarning="true"
                    >{solid}</div>
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
    },
    pair: {
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    solid: {
        color: colors.colorMain,
        outline: 'none',
    },
    liquid: {
        color: colors.colorThird,
        fontWeight: 100,
        marginLeft: 0,
    }

}

