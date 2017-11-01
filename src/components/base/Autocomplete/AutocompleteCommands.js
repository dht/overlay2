import React from 'react';
import commands, {commandsAsOptions} from "../../../constants/commands";
import Autocomplete from "./Autocomplete";
import {paramToOptions, paramToWords} from "../../../constants/parameters";

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
            words: Object.keys(commands),
            allOptions: commandsAsOptions,
            filteredOptions: [],
        }

        this.onChange = this.onChange.bind(this);
        this.onType = this.onType.bind(this);

        this.setWordForIndex = this.setWordForIndex.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear() {
        this.setWordForIndex(0);
    }

    setParameters({command = this.state.command, words = [], allOptions = [], filterOptions = [], parameters = this.state.parameters, currentParameter = null}) {

        if (currentParameter > 0) {
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
            commandLength: (parameters || []).length,
        }, () => {
            this.onType('');
        });
    }

    setWordForIndex(index, word) {
        const {commandLength} = this.state;
        const currentParameter = index;

        switch (index) {
            case words.CLEAR:
                this.setParameters({
                    command: null,
                    commandLength: 0,
                    words: Object.keys(commands),
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
                    command,
                    parameters,
                    currentParameter,
                });

                if (!parameters || parameters.length === 0) {
                    this.clear();
                    return true;
                }

                break;

            default:
                if (index > commandLength) {
                    this.clear();
                    return true;
                }

                this.setParameters({
                    currentParameter,
                });

                break;
        }

        return false;
    }

    onChange(phrase) {
        const len = phrase.length,
            word = phrase[len - 1];

        return this.setWordForIndex(len, word);
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
                />
            </div>
        );
    }
}

const styles = {}

