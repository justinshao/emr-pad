import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import BackspaceIcon from 'material-ui/svg-icons/content/backspace';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import SaveIcon from 'material-ui/svg-icons/content/save';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';
import WritingBoard from './WritingBoard';
import { appThemeColor } from '../styles';
import { postEmrInformed } from '../service';

const writingBoardSize = 300;
const btnHeight = 70;
const btnStyle = {
    width: '200px',
    height: `${btnHeight}px`
};
const btnFirstStyle = Object.assign({}, btnStyle, {
    borderTop: '1px solid #e0e0e0'
});
const btnLastStyle = Object.assign({}, btnStyle, {
    borderBottom: '1px solid #e0e0e0'
});
const btnLabelStyle = {
    fontSize: '20px',
    color: appThemeColor
};
const btnGroupStyle = {
    display: 'inline-block',
    verticalAlign: 'bottom',
    paddingLeft: '50px',
    paddingBottom: `${(writingBoardSize - 3 * btnHeight) / 2}px`
};

const wordSize = 40;
const maxWordsPerLine = 20;

class Informed extends React.Component {

    state = {
        alertMessage: ''
    }

    constructor(props) {
        super(props);

        this.handleBackspace = this.handleBackspace.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handlePostWord = this.handlePostWord.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);

        this.wordPos = 0;
    }

    componentDidMount() {
        this.updateInformedText(this.props.informedText);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.informedText !== nextProps.informedText) {
            this.updateInformedText(nextProps.informedText);
        }
    }

    updateInformedText(informedText) {
        const ctx = this.informedCanvas.getContext('2d');
        const wrapperWidth = this.wrapper.clientWidth;
        const words = informedText.length;

        let wordsPerLine = 0;
        while (wrapperWidth - wordsPerLine * wordSize >= wordSize) {
            wordsPerLine++;
        }
        wordsPerLine = Math.min(wordsPerLine, maxWordsPerLine);

        let lines = Math.ceil(words / wordsPerLine);

        this.informedCanvas.width = wordsPerLine * wordSize;
        this.informedCanvas.height = lines * wordSize;

        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#777777';
        ctx.fillRect(0, 0, this.informedCanvas.width, this.informedCanvas.height);
        ctx.strokeRect(0, 0, this.informedCanvas.width, this.informedCanvas.height);
        ctx.beginPath();
        for (let i = 1; i < lines; i++) {
            ctx.moveTo(0, i * wordSize);
            ctx.lineTo(this.informedCanvas.width, i * wordSize);
        }

        for (let i = 1; i < wordsPerLine; i++) {
            ctx.moveTo(i * wordSize, 0);
            ctx.lineTo(i * wordSize, this.informedCanvas.height);
        }
        ctx.stroke();
        ctx.restore();
    }

    handleBackspace() {
        if (this.wordPos > 0) {
            const ctx = this.informedCanvas.getContext('2d');
            const bd = 1; // 1像素黑色边框
            let x = (this.wordPos - 1) * wordSize % this.informedCanvas.width + bd;
            let y = Math.floor((this.wordPos - 1) * wordSize / this.informedCanvas.width) * wordSize + bd;

            ctx.save();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(x, y, wordSize - 2 * bd, wordSize - 2 * bd);
            ctx.restore();

            this.wordPos--;
        }
    }
    handleClear() {
        this.updateInformedText(this.props.informedText);
        this.wordPos = 0;
    }
    handlePostWord(signer) {
        let x = this.wordPos * wordSize % this.informedCanvas.width;
        let y = Math.floor(this.wordPos * wordSize / this.informedCanvas.width) * wordSize;

        signer.copyTo(this.informedCanvas, x, y, wordSize, wordSize);

        this.wordPos++;
    }
    handlePost() {
        const { emrId } = this.props;
        const data = this.informedCanvas.toDataURL('image/jpeg');

        postEmrInformed(emrId, data)
            .then(() => this.setState({ alertMessage: '提交成功!' }))
            .catch(() => this.setState({ alertMessage: '提交失败!' }));
    }
    handleAlertClose() {
        this.setState({
            alertMessage: ''
        });
    }

    render() {
        let btns = [
            <FlatButton
                key="back"
                label="退格"
                labelPosition="after"
                icon={<BackspaceIcon color={appThemeColor} />}
                style={btnFirstStyle}
                labelStyle={btnLabelStyle}
                onTouchTap={this.handleBackspace}
            />,
            <Divider key="div1" />,
            <FlatButton
                key="clear"
                label="清空"
                labelPosition="after"
                icon={<CloseIcon color={appThemeColor} />}
                style={btnStyle}
                labelStyle={btnLabelStyle}
                onTouchTap={this.handleClear}
            />,
            <Divider key="div2" />,
            <FlatButton
                key="post"
                label="提交"
                labelPosition="after"
                icon={<SaveIcon color={appThemeColor} />}
                style={btnLastStyle}
                labelStyle={btnLabelStyle}
                onTouchTap={this.handlePost}
            />
        ];

        const { alertMessage } = this.state;

        return (
            <div style={this.props.style} ref={(wrapper) => { this.wrapper = wrapper }}>
                <div style={{ padding: '0px 40px' }}>
                    <b>请抄写如下文字：</b>
                    <h2>{this.props.informedText}</h2>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <canvas ref={(canvas) => { this.informedCanvas = canvas; }}
                        style={{ boxShadow: '1px 1px 5px #888888', marginBottom: '10px' }} /><br />
                    <WritingBoard width={writingBoardSize} height={writingBoardSize}
                        interval={500} onPostWord={this.handlePostWord} enabled={!!this.props.informedText} />
                    <div style={btnGroupStyle}>
                        {btns}
                    </div>
                </div>
                <Snackbar
                    open={!!alertMessage}
                    message={alertMessage}
                    autoHideDuration={3000}
                    onRequestClose={this.handleAlertClose}
                />
            </div>
        );
    }
}

export default Informed;