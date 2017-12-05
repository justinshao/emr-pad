import React from 'react';
import NavBackHeaderBar from './NavBackHeaderBar';
import Informed from './Informed';
import { contentStyle } from '../styles';
import { getInformedText } from '../service';
import logger from '../logger';

class EmrSign extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = {
            informedText: ''
        }

        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
    }

    componentDidMount() {
        let { emrId } = this.props.match.params;

        getInformedText(emrId)
            .then(text => this.setState({ informedText: text }))
            .catch(() => logger.error('获取知情同意信息出错'));
    }

    handleNavBackRequest() {
        let { history } = this.props;
        let { regId, emrId } = this.props.match.params;

        history.replace(`/emr/${regId}/${emrId}`);
    }

    render() {
        const { emrId } = this.props.match.params;

        return (
            <div>
                <NavBackHeaderBar onNavBackRequest={this.handleNavBackRequest} title="知情同意书"/>
                <Informed style={ contentStyle } emrId={emrId} informedText={ this.state.informedText } />
            </div>
        );
    }
}

export default EmrSign;