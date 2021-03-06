import React from 'react';
import NavBackHeaderBar from './NavBackHeaderBar';
import { headerBarLoadingStyle, headerBarBtnStyle } from '../styles';
import CircularProgress from 'material-ui/CircularProgress';
import { getPat } from '../service';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import '../styles/App.css';
import { Icon } from 'semantic-ui-react';

const style = {
    'color': 'white',
    'paddingRight': '40px'
}

class ClinicHeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null
        };
        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
        this.handleMenuButtonTouchTap = this.handleMenuButtonTouchTap.bind(this);
        this.handlePaitentInfor = this.handlePaitentInfor.bind(this);
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

    //获取菜单信息
    handleMenuButtonTouchTap() {
        if (this.props.onOpenMenuRequest) {
            this.props.onOpenMenuRequest();
        }
    }

    // 跳转病人信息
    handlePaitentInfor() {
        if (this.props.onPaitentInfor) {
            this.props.onPaitentInfor();
        }
    }



    render() {
        let title = (this.state.title || <CircularProgress color="white" size={headerBarLoadingStyle.size} style={headerBarLoadingStyle} />);
        return (
            <NavBackHeaderBar
                title={title}
                onNavBackRequest={this.handleNavBackRequest}
                style={headerBarBtnStyle}
                iconStyleRight={style}>
                <FlatButton
                    icon={<MenuIcon />}
                    style={headerBarBtnStyle}
                    onTouchTap={this.handleMenuButtonTouchTap}
                    className='webComponentShow'
                />
                <div className={'userIcon'} onClick={this.handlePaitentInfor}>
                    <Icon name='user circle' size='big' />
                </div>

            </NavBackHeaderBar>
        )
    }
}

export default ClinicHeaderBar;