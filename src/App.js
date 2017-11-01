import React, {Component} from 'react';
import './App.css';
import Autocomplete from "./components/base/Autocomplete/AutocompleteCommands";
import {addAction, setPreview} from "./api/actions_api";
import Log from "./components/base/Log/Log";
import * as config from "./config/config";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lastRun: {},
            lastPreview: {},
        }

        this.onRun = this.onRun.bind(this);
        this.onPreview = this.onPreview.bind(this);
    }


    onRun(phrase) {
        addAction({
            phrase,
        })

        this.setState({
            lastRun: phrase
        })
    }

    onPreview(phrase, original) {
        setPreview({
            phrase: [...phrase, original]
        })

        this.setState({
            lastPreview: [...phrase, original]
        })
    }

    render() {
        return (
            <div className="App">
                <Autocomplete
                    onRun={this.onRun}
                    onPreview={this.onPreview}/>

                {config.debugMode ? <Log state={this.state} top={420}/> : null}
            </div>
        );
    }
}

export default App;
