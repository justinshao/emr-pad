import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

const style = {
    'fill': 'rgb(0, 188, 212)'
};
class ModuleCatalogWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.handlePaitentInfor = this.handlePaitentInfor.bind(this);
        this.handleChangeTap = this.handleChangeTap.bind(this);
    }

    // 跳转病人信息
    handlePaitentInfor() {
        if (this.props.onPaitentInfor) {
            this.props.onPaitentInfor();
        }
    }

    // 跳转其他页面
    handleChangeTap(item) {
        if (item.Url && this.props.onChangeTap) {
            this.props.onChangeTap(item);
        }
    }

    render() {
        let menu = this.props.menu;
        let menus = menu.map(mainmenu => {
            let nestedItem = mainmenu.Items ? (mainmenu.Items.map(item =>
                <ListItem key={item.Id} primaryText={item.Name} onClick={() => this.handleChangeTap(item)} />
            )) : [];
            return (
                <ListItem
                    primaryText={mainmenu.Name}
                    leftIcon={<ContentInbox style={style} />}
                    key={mainmenu.Name}
                    initiallyOpen={false}
                    primaryTogglesNestedList={true}
                    nestedItems={nestedItem}
                    onClick={() => this.handleChangeTap(mainmenu)}
                />
            )
        })

        return (
            <div>
                <List>
                    {menus}
                </List>
            </div>
        );
    }
}

export default ModuleCatalogWrapper;