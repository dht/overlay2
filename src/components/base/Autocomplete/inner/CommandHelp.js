import React from 'react';
import colors from "../../../../constants/colors";

export const CommandHelp = (props) => {
    const {value, phrase} = props,
        currentWord = phrase.length,
        parts = value.split(' ');

    return <div style={styles.params}>
        {parts.map((part, index) => {
            const current = currentWord === index,
                style = current ? styles.paramCurrent : styles.param;

            return <div style={style} key={index}>{part}</div>
        })}
    </div>
}

const styles = {
    params: {
        position:'absolute',
        top:45,
        left:0,
        backgroundColor:colors.colorMain,
        color:'#cccc00',
        fontWeight:'100',
        fontSize:14,
        display:'flex',
        flexDirection:'row',
    },
    param: {
        marginRight:5,
    },
    paramCurrent: {
        marginRight:5,
        fontWeight:'bold',
    }
}

