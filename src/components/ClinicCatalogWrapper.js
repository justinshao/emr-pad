import React from 'react';
import { List, ListItem } from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import { Icon } from 'semantic-ui-react'

const colorStyle = {
    color: 'rgb(0, 188, 212)'
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
            let nestedItem = mainmenu.Items ? (mainmenu.Items.map(item =>{
                let color=item.hasOwnProperty("HasReport")?(item.HasReport?'':'blue'):'';
                return (
                    <ListItem
                    key={item.Id}
                    primaryText={item.Name}
                    onClick={() => this.handleChangeTap(item)}
                    style={{ paddingLeft: '27px',color:color }}
                />
                )
            }
                
            )) : [];
            //配置目录图标
            let iconName = (
            //病案首页
                mainmenu.Id == '1' ? 'h' :
                //病例概要
                    mainmenu.Id == '2' ? 'browser' :
                    //检查报告
                        mainmenu.Id == '3' ? 'first aid' :
                        //化验报告
                            mainmenu.Id == '4' ? 'file excel outline' :
                            //病理报告，会诊单
                                mainmenu.Id == '5' ? 'file text outline' :
                                //护理单
                                    mainmenu.Id == '6' ? 'heartbeat' :
                                    //体温单
                                        mainmenu.Id == '7' ? 'thermometer half' :
                                        //医嘱/中药医嘱
                                            mainmenu.Id == '8' ? 'doctor' :
                                            //诊断
                                                mainmenu.Id == '10' ? 'treatment' : 'file outline'
            );
            return (
                <ListItem
                    primaryText={mainmenu.Name}
                    leftIcon={<Icon disabled name={iconName} size='large' style={colorStyle} />}
                    key={mainmenu.Name}
                    initiallyOpen={false}
                    primaryTogglesNestedList={true}
                    nestedItems={nestedItem}
                    onClick={() => this.handleChangeTap(mainmenu)}
                    innerDivStyle={{ paddingLeft: '60px' }}
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