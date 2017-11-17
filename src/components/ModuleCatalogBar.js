import React from 'react';
import ModuleCatalogWrapper from './ModuleCatalogWrapper';
import Drawer from 'material-ui/Drawer';

class ModuleCatalogBar extends React.Component{

    render() {
        return (
            // docked表示，点击之后抽屉是否拉回
            // open表示，抽屉的显示状态
            <Drawer
                docked={false}
                open={this.props.open}
                onRequestChange={this.props.onRequestChange}
                openSecondary={true}
                >
                <ModuleCatalogWrapper/>
            </Drawer>
        );
    }

}

export default ModuleCatalogBar;
