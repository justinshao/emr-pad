import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import '../styles/App.css';

const bodywidth = (document.body.clientWidth / 4);
class ClinicBottomMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottomMenuHeight: 65
        }
        this.handleChangeTap = this.handleChangeTap.bind(this);
        this.handleChangeZindex = this.handleChangeZindex.bind(this);
    }

    // 跳转其他页面
    handleChangeTap(item) {
        if (item.Url !== null && this.props.onChangeTap) {
            this.props.onChangeTap(item);
        }
    }

    handleChangeZindex(y) {
        this.setState({
            bottomMenuHeight: y
        })
    }

    render() {
        let menu = this.props.menu.map((menuItem, i) => {
            if (menuItem.Items) {
                let items = menuItem.Items.map((item, j) => {
                    let hasReport = item.hasOwnProperty('HasReport') ? (item.HasReport ? true : false) : false;
                    return (
                        <Dropdown.Item key={j} onClick={this.handleChangeTap.bind(this, item)} disabled={!hasReport}>{item.Name}</Dropdown.Item>
                    )
                })
                return (
                    <Dropdown
                        key={i}
                        text={menuItem.Name}
                        upward
                        className='link item'
                        scrolling={items.length < 5 ? false : true}
                        onOpen={() => this.handleChangeZindex(230)}
                        onClose={() => this.handleChangeZindex(70)}>
                        <Dropdown.Menu>
                            {items}
                        </Dropdown.Menu>
                    </Dropdown>
                )
            }
            else {
                return (
                    <Menu.Item key={i} onClick={this.handleChangeTap.bind(this, menuItem)}>{menuItem.Name}</Menu.Item>
                )
            }
        })
        let menuLength = this.props.menu.length < 5 ? '100%' : this.props.menu.length * bodywidth

        return (
            <div className={'mobileComponentShow'}>
                <div className={'bottomMenu'} style={{ height: this.state.bottomMenuHeight }}>
                    <Menu
                        style={{ position: 'absolute', bottom: '0px', left: '0px', width: menuLength }}
                        widths={Math.max(this.props.menu.length, 1)}
                        onClick={this.handleIsVisible}>
                        {menu}
                    </Menu>
                </div>
            </div>
        )
    }
}

export default ClinicBottomMenu;