import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import '../styles/App.css';
import { getEmrCatalog } from '../service';

const bodywidth = (document.body.clientWidth / 4);
class EmrBottomMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottomMenuHeight: 70,
            menu: []
        }
        this.handleEmrSelected = this.handleEmrSelected.bind(this);
        this.handleChangeHeight = this.handleChangeHeight.bind(this);
    }

    componentDidMount() {
        let { regId } = this.props;
        this.fetchCatalog(regId);
    }

    fetchCatalog(regId) {
        getEmrCatalog(regId)
            .then(catalog => this.setState({ menu: catalog }))
    }

    // 跳转页面
    handleEmrSelected(item) {
        if (item.Url !== null && this.props.onEmrSelected) {
            this.props.onEmrSelected(item);
        }
    }

    handleChangeHeight(y) {
        this.setState({
            bottomMenuHeight: y
        })
    }



    render() {
        let menu = this.state.menu.length!=0?this.state.menu.map((menuItem, i) => {
            if (menuItem.Documents) {
                let items = menuItem.Documents.map((item, j) => {
                    return (
                        <Dropdown.Item key={j} onClick={this.handleEmrSelected.bind(this, item)} >{item.Title}</Dropdown.Item>
                    )
                })
                return (
                    <Dropdown
                        key={i}
                        text={menuItem.Title}
                        upward
                        className='link item'
                        scrolling={items.length < 5 ? false : true}
                        onOpen={() => this.handleChangeHeight(230)}
                        onClose={() => this.handleChangeHeight(70)}>
                        <Dropdown.Menu>
                            {items}
                        </Dropdown.Menu>
                    </Dropdown>
                )
            }
            else {
                return (
                    <Menu.Item key={i} onClick={this.handleEmrSelected.bind(this, menuItem)}>{menuItem.Title}</Menu.Item>
                )
            }
        }):<h3 style={{lineHeight:'40px'}}>暂无病历</h3>
        let menuLength = this.state.menu.length < 5 ? '100%' : this.state.menu.length * bodywidth

        return (
            <div className={'mobileComponentShow'}>
                <div className={'bottomMenu'} style={{ height: this.state.bottomMenuHeight }}>
                    <Menu
                        style={{ position: 'absolute', bottom: '0px', left: '0px', width: menuLength }}
                        widths={Math.max(this.state.menu.length, 1)}>
                        {menu}
                    </Menu>
                </div>
            </div>
        )
    }
}

export default EmrBottomMenu;