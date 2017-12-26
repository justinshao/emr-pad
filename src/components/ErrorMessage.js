import React from 'react';
import ErrorIcon from 'material-ui/svg-icons/alert/error';
import { red500 } from 'material-ui/styles/colors';

const ErrorMessage = (props) => {
    return (
        <h1 style={Object.assign({}, props.style, { wordWrap: 'break-word' })}>
            <ErrorIcon color={red500} />
            {props.message}
        </h1>
    );
}

export default ErrorMessage;