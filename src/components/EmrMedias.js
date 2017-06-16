import React from 'react';
import NavBackHeaderBar from './NavBackHeaderBar';
import Medias from './Medias';
import { contentStyle } from '../styles';

class EmrMedias extends React.Component {

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
        const { emrId, pos } = this.props.match.params;

        return (
            <div>
                <NavBackHeaderBar onNavBackRequest={this.handleNavBackRequest} title="病历附件"/>
                <Medias emrId={emrId} style={ contentStyle } pos={pos} />
            </div>
        );
    }
}

export default EmrMedias;