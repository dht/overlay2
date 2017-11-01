import React from 'react';
import {isAlphaNumeric, isSpecialKey} from "../../../utils/keys";
import {soundForKey} from "../../../constants/sounds";
import {playSound} from "../../../utils/sound";
import colors from "../../../constants/colors";
import {setEndOfContenteditable} from "../../../utils/cursor";

export default class AutocompleteEditable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onChange = this.onChange.bind(this);
        this.focus = this.focus.bind(this);
    }

    componentWillReceiveProps(props) {
        const {value} = props;

        if (value !== this.state.value) {
            this.setState({value});
            setEndOfContenteditable(this._input);
        }
    }

    componentDidMount() {
        this.focus();
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

        if (!acceptedKey) {
            ev.preventDefault();
        }

        if (specialKey) {
            this.props.onSpecialKey(ev.which);
        }
    }

    onChange() {
        const solid = this._input.innerHTML;
        this.props.onChange(solid);
    }


    render() {
        const {value} = this.state;

        return (
            <div ref={(c) => this._input = c}
                 style={styles.solid}
                 onKeyDown={this.onKeyDown}
                 onInput={this.onChange}
                 onBlur={this.onChange}
                 contentEditable={true}
                 spellCheck={false}
                 suppressContentEditableWarning="true"
            >{value}</div>
        );
    }
}

const styles = {
    solid: {
        color: colors.colorMain,
        outline: 'none',
    },
}

