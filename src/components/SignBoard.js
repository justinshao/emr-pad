import React from 'react';
import Signer from './Signer';

class SignBoard extends React.Component {

    constructor(props) {
        super(props);

        this.handleEnd = this.handleEnd.bind(this);
    }

    componentDidMount() {
        const { width, height } = this.props;

        this.canvas.width = width || 300;
        this.canvas.height = height || 300;

        this.signer = new Signer(this.canvas, {
            onEnd: this.handleEnd,
            minWidth: 4,
            maxWidth: 7
        });
        this.signer.on();
    }

    componentWillUnmount() {
        this.signer.off();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.empty) {
            this.signer.clear();
            this.post();
        }
    }

    handleEnd() {
        this.post();
    }

    post() {
        let { onPost } = this.props;
        onPost && onPost(this.signer.isEmpty() ? null : this.signer.toDataURL());
    }

    render() {
        return (
            <canvas style={this.props.style} ref={(canvas) => { this.canvas = canvas }} />
        );
    }
}

export default SignBoard;