import React from 'react';
import colors from "../../../constants/colors";

const LogLine = (props) => <div style={styles.line}>
    <div style={styles.key}>{props.field}</div>
    <div style={styles.value} title={JSON.stringify(props.value)}>{JSON.stringify(props.value)}</div>
</div>

export default class Log extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const {top, state} = this.props;

        return (
            <div style={{...styles.container, top: top}}>
                {
                    Object.keys(state).map((key, index) => <LogLine key={key} field={key} value={state[key]}/>)
                }
            </div>
        );
    }
}

const styles = {
    container: {
        width:400,
        position:'fixed',
        right:0,
        border:'1px solid green',
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
    },
    key: {
        width: 150,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: 12,
        color: colors.colorWhite,
    },
    value: {
        width: 250,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: 12,
        color: colors.colorWhite,
    }

}

