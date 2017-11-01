import React from 'react';
import {isAlphaNumeric, isSpecialKey} from "../../../utils/keys";
import {soundForKey} from "../../../constants/sounds";
import {playSound} from "../../../utils/sound";
import colors from "../../../constants/colors";
import {setEndOfContenteditable} from "../../../utils/cursor";
import keys from "../../../constants/keys";

export default class AutocompleteInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            width: 10,
            value: ''
        }

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onChange = this.onChange.bind(this);
        this.focus = this.focus.bind(this);
        this.style = this.style.bind(this);
    }

    setValue(value) {
        this._span.innerHTML = value;
        const width = this._span.getBoundingClientRect().width;

        this.setState({
            width,
            value
        })
    }

    componentWillReceiveProps(props) {
        const {value} = props;

        if (value !== this.state.value) {
            this.setValue(value);
        }
    }

    componentDidMount() {
        this.focus();
    }

    style() {
        const {width} = this.state;

        return {
            ...styles.container,
            width,
        }
    }

    focus() {
        this._input.focus();
    }

    onKeyDown(ev) {
        const acceptedKey = isAlphaNumeric(ev.which),
            specialKey = isSpecialKey(ev.which);

        if (acceptedKey || specialKey) {
            playSound(soundForKey(ev.which));
        }

        if (specialKey && ev.which !== keys.BACKSPACE) {
            ev.preventDefault();
            this.props.onSpecialKey(ev.which);
        }
    }

    onChange() {
        const value = this._input.value;
        this.setValue(value);
        this.props.onChange(value);
    }
    render() {
        const {value} = this.state;

        return (
            <div>
           <input
               ref={(c) => this._input = c}
               style={this.style()}
               onKeyDown={this.onKeyDown}
               onChange={this.onChange}
               onBlur={this.onChange}
               spellCheck={false}
               type="text" value={value} />

            <span
                ref={(c) => this._span = c}
                style={{...styles.container, ...styles.tmpSpan}}>
            </span>
            </div>
        );
    }
}

const styles = {
    container: {
        color: colors.colorMain,
        outline: 'none',
        fontSize:20,
        backgroundColor: 'white',
        border:'none',
        padding:0,
        margin:0,
    },
    tmpSpan: {
        visibility: 'hidden',
        whiteSpace: 'pre',
        position:'absolute',
        left:0,
        top:0,
    }
}

