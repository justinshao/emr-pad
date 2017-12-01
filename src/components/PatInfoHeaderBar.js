import React from 'react';
import NavBackHeaderBar from './NavBackHeaderBar';
import { headerBarLoadingStyle, headerBarBtnStyle } from '../styles';
import CircularProgress from 'material-ui/CircularProgress';
import { getPat } from '../service';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';

class PatInfoHeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            open: false
        };
        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
        this.handleMenuButtonTouchTap = this.handleMenuButtonTouchTap.bind(this);
    }

    //获取菜单信息
    handleMenuButtonTouchTap() {
        if (this.props.onOpenMenuRequest) {
            this.props.onOpenMenuRequest();
        }
    }

    // 挂在时加载病人信息
    componentDidMount() {
        getPat(this.props.regId)
            .then(patInfo => this.setState({ title: `${patInfo.Name}（${patInfo.Sex} ${patInfo.VisitNo}）` }))
            .catch(() => this.setState({ title: '获取病人信息出错' }));
    }

    // 向上触发返回功能
    handleNavBackRequest() {
        if (this.props.onNavBackRequest) {
            this.props.onNavBackRequest()
        }
    }

    render() {
        let title = (this.state.title || <CircularProgress color="white" size={headerBarLoadingStyle.size} style={headerBarLoadingStyle} />);
        const style = {
            'color': 'white',
            'paddingRight': '40px'
        }
        return (
            <NavBackHeaderBar
                title={title}
                onNavBackRequest={this.handleNavBackRequest}
                style={headerBarBtnStyle}
                iconStyleRight={style}>
                <FlatButton
                    icon={<MenuIcon />}
                    style={headerBarBtnStyle}
                    onTouchTap={this.handleMenuButtonTouchTap} />
            </NavBackHeaderBar>
        )
    }
}

export default PatInfoHeaderBar;