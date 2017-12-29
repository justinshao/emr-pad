import React from 'react';
import Drawer from 'material-ui/Drawer';
import EmrCatalogWrapper from './EmrCatalogWrapper';
import '../styles/App.css';

class EmrCalalogBar extends React.Component {

    render() {
        return (
            <Drawer
                docked={false}
                open={this.props.open}
                onRequestChange={this.props.onRequestChange}
                openSecondary
                className='webComponentShow'
                >
                <EmrCatalogWrapper onEmrSelected={this.props.onEmrSelected} regId={this.props.regId} />
            </Drawer>
        );
    }

}

export default EmrCalalogBar;