import React from 'react';
import NavBackHeaderBar from './NavBackHeaderBar';
import Sign from './Sign';
import { contentStyle } from '../styles';

class EmrSign extends React.Component {

    constructor(props) {
        super(props);

        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
    }

    handleNavBackRequest() {
        let { history } = this.props;
        let { regId, emrId } = this.props.match.params;

        history.replace(`/emr/${regId}/${emrId}`);
    }

    render() {
        let { emrId } = this.props.match.params;

        return (
            <div>
                <NavBackHeaderBar onNavBackRequest={this.handleNavBackRequest} title="签名" />
                <Sign emrId={emrId} style={Object.assign({}, contentStyle, { textAlign: 'center', paddingTop: '150px' })} />
            </div>
        );
    }
}

export default EmrSign;