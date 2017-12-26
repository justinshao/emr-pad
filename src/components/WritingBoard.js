import React from 'react';
import Signer from './Signer';
import { writingBoardStyle } from '../styles';

class WritingBoard extends React.Component {
    constructor(props) {
        super(props);

        this.handleBegin = this.handleBegin.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.handlePostWord = this.handlePostWord.bind(this);
    }

    componentDidMount() {
        const { width, height } = this.props;

        this.canvas.width = width || 300;
        this.canvas.height = height || 300;

        this.signer = new Signer(this.canvas, {
            onBegin: this.handleBegin,
            onEnd: this.handleEnd,
            minWidth: 3,
            maxWidth: 7
        });

        if (this.props.enabled) {
            this.signer.on();
        }
    }

    componentWillUnmount() {
        this.signer.off();
    }

    handleBegin() {
        this.stopTimer();
    }
    handleEnd() {
        this.startTimer();
    }
    handlePostWord() {
        if (this.props.onPostWord) {
            this.stopTimer();
            this.props.onPostWord(this.signer);
            this.signer.clear();
        }
    }

    startTimer() {
        this.timer = setTimeout(this.handlePostWord, this.props.interval);
    }
    stopTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    render() {
        // console.log(writingBoardStyle);

        return (
            <canvas style={writingBoardStyle} ref={(canvas) => { this.canvas = canvas }} />
        );
    }
}

export default WritingBoard;