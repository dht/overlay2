import React from 'react';
import commands, {commandsAsOptions} from "../../../constants/commands";
import Autocomplete from "./Autocomplete";
import {paramToOptions, paramToWords} from "../../../utils/parameters";
import {addAction, setPreview} from "../../../api/actions_api";

const words = {
    CLEAR: 0,
    COMMAND: 1,
    PARAMETER1: 2,
    PARAMETER2: 3,
    PARAMETER3: 4,
    PARAMETER4: 5,
}

export default class AutocompleteCommands extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            commandLength: 0,
            command: null,
            words: Object.keys(commands).sort(),
            allOptions: commandsAsOptions,
            filteredOptions: [],
        }

        this.onChange = this.onChange.bind(this);
        this.onType = this.onType.bind(this);

        this.setWordForIndex = this.setWordForIndex.bind(this);
        this.clear = this.clear.bind(this);
        this.run = this.run.bind(this);

        this.onChangeHighlightedOption = this.onChangeHighlightedOption.bind(this);
    }

    run(phrase) {
        addAction({
            phrase,
        })
    }

    clear() {
        this.setWordForIndex(0);
    }

    setParameters({command = this.state.command, words = [], allOptions = [], filterOptions = [], parameters = this.state.parameters, currentParameter = null, phrase=''}) {

        if (currentParameter > 0 && parameters) {
            const parameter = parameters[currentParameter - 1];
            words = paramToWords(parameter);
            allOptions = paramToOptions(parameter);
        }

        this.setState({
            command,
            words,
            allOptions,
            filterOptions,
            parameters,
            phrase,
            commandLength: (parameters || []).length,
        }, () => {
            this.onType('');
        });
    }

    onChangeHighlightedOption({original, triggerByArrow}) {
        const {phrase} = this.state;

        if (!triggerByArrow) {
            return;
        }

        if (phrase && phrase.length >= 1) {
            setPreview({
                phrase: [...phrase, original]
            })
        }
    }

    setWordForIndex(index, word, phrase) {
        const {commandLength} = this.state;
        const currentParameter = index;

        switch (index) {
            case words.CLEAR:
                this.setParameters({
                    command: null,
                    commandLength: 0,
                    words: Object.keys(commands).sort(),
                    allOptions: commandsAsOptions,
                    filteredOptions: [],
                });
                break;

            case words.COMMAND:
                const command = commands[word],
                    {parameters} = command||{};

                if (!command) {
                    this.clear();
                    return true;
                }

                this.setParameters({
                    phrase,
                    command,
                    parameters,
                    currentParameter,
                });

                if (!parameters || parameters.length === 0) {
                    this.run(phrase);
                    this.clear();
                    return true;
                }

                break;

            default:
                if (index > commandLength) {
                    this.run(phrase);
                    this.clear();
                    return true;
                }

                this.setParameters({
                    phrase,
                    currentParameter,
                });

                break;
        }

        return false;
    }

    onChange(phrase) {
        const len = phrase.length,
            word = phrase[len - 1];

        return this.setWordForIndex(len, word, phrase);
    }

    onType(value) {
        const {allOptions} = this.state;

        const filteredOptions = allOptions
            .filter(item => item.key.indexOf(value) === 0);

        this.setState({filteredOptions});
    }

    render() {
        const {words, command, filteredOptions} = this.state,
            {structure = ''} = command || {};

        return (
            <div style={styles.container}>
                <Autocomplete
                    words={words}
                    commandHelp={structure}
                    optionsList={filteredOptions}
                    onChange={this.onChange}
                    onType={this.onType}
                    onChangeHighlightedOption={this.onChangeHighlightedOption}
                />
            </div>
        );
    }
}

const styles = {}

