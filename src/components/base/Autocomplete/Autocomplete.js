import React from 'react';
import './Autocomplete.css';
import AutocompletePair from "./AutocompletePair";
import colors from "../../../constants/colors";
import {CommandHelp} from "./inner/CommandHelp";
import OptionsList from "./inner/OptionsList";
import Log from "../Log/Log";
import * as config from "../../../config/config";

export default class Autocomplete extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            phrase: [],
            highlightedOption: ''
        }

        this.onAddWord = this.onAddWord.bind(this);
        this.onRemoveWord = this.onRemoveWord.bind(this);
        this.onChangeHighlightedOption = this.onChangeHighlightedOption.bind(this);
        this.focus = this.focus.bind(this);
        this.clear = this.clear.bind(this);
        this.onClear = this.onClear.bind(this);
    }

    clear() {
        this.setState({
            phrase: [],
            highlightedOption: ''
        })
    }

    onClear() {
        this.setState({
            highlightedOption: ''
        })
    }

    focus() {
        document.getElementById('__autocomplete_theInput').focus();
    }

    onAddWord(word) {
        const {phrase, highlightedOption} = this.state;

        if (highlightedOption) {
            word = highlightedOption;
        }

        phrase.push(word);
        this.setState({phrase});

        const clear = this.props.onChange(phrase);

        if (clear) {
            this.clear();
        }
    }

    onRemoveWord() {
        const {phrase} = this.state;

        phrase.pop();

        if (phrase.length === 0) {
            this.setState({command: null})
        }

        this.setState({phrase});
        this.props.onChange(phrase);
    }

    onChangeHighlightedOption(info) {
        const {word} = info;
        const {highlightedOption} = this.state;

        if (highlightedOption !== word) {
            this.setState({highlightedOption: word})
        }

        this.props.onChangeHighlightedOption(info);
    }

    render() {
        const {words, optionsList, commandHelp} = this.props;

        const {phrase} = this.state;

        return (
            <div onClick={this.focus}
                 style={styles.container} className="Autocomplete-container">
                {
                    phrase.map((word, index) => <div key={index} style={styles.word}>
                        {word}
                    </div>)
                }

                <OptionsList
                    items={optionsList}
                    onChangeHighlightedOption={this.onChangeHighlightedOption}
                />

                <AutocompletePair words={words}
                                  onChange={this.props.onType}
                                  onAddWord={this.onAddWord}
                                  onRemoveWord={this.onRemoveWord}
                                  onClear={this.onClear}
                />

                <CommandHelp value={commandHelp} phrase={phrase}/>
                {config.debugMode?<Log state={this.state} top={120} />: null}
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
        paddingLeft: 10,
    },
    word: {
        marginRight: 8,
        color: colors.colorMain,
    },
}

