import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import CircularProgress from 'material-ui/CircularProgress';


const style = {
    'fill': 'rgb(0, 188, 212)'
};

class ClinicCatalogWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.handleChangeTap = this.handleChangeTap.bind(this);
    }

    // 跳转其他页面
    handleChangeTap(item) {
        if (item.Url && this.props.onChangeTap) {
            this.props.onChangeTap(item);
        }
    }

    render() {
        let loading = (
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <CircularProgress size={60} thickness={7} />
                <h3>努力加载中...</h3>
            </div>
        );
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
            <div style={{ overflow: 'auto', height: '80%' }}>
                {
                    this.props.loading ? loading :
                        (<List>
                            {menus}
                        </List>)
                }
            </div>
        );
    }
}

export default ClinicCatalogWrapper;