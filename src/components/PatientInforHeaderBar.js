import React from 'react';
import NavBackHeaderBar from './NavBackHeaderBar';
import { headerBarLoadingStyle, headerBarBtnStyle } from '../styles';
import CircularProgress from 'material-ui/CircularProgress';
import { getPat } from '../service';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const popoverStyle={
    'width':'100px'
}

const buttonStyle={
    'backgroundColor':''
}

const raiseStyle={
    'backgroundColor':'',
    'boxShadow':'',
    'lineHeight':'64px'
}

class PatientInforHeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            open:false
        };
        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
        this.handleRequestClose=this.handleRequestClose.bind(this);
        this.handleTouchTap=this.handleTouchTap.bind(this);
        this.handlePatientHospital=this.handlePatientHospital.bind(this);
        this.handlePatientBasicInfor=this.handlePatientBasicInfor.bind(this);
        this.handlePatientAllergy=this.handlePatientAllergy.bind(this);
        this.handlePatientDiet=this.handlePatientDiet.bind(this);
        this.handlePatientAssociatHospital=this.handlePatientAssociatHospital.bind(this);
        this.handlePatientRotation=this.handlePatientRotation.bind(this);
        this.handlePatientChangeHospital=this.handlePatientChangeHospital.bind(this);
        this.handlePatientAccount=this.handlePatientAccount.bind(this);
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

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

    //跳转住院信息
    handlePatientHospital(){
        if(this.props.onPatientHospital){
            this.props.onPatientHospital();
        }
    }

    //跳转基本信息
    handlePatientBasicInfor(){
        if(this.props.onPatientBasicInfor){
            this.props.onPatientBasicInfor();
        }
    }

    //跳转过敏信息
    handlePatientAllergy(){
        if(this.props.onPatientAllergy){
            this.props.onPatientAllergy();
        }
    }

    //跳转饮食医嘱信息
    handlePatientDiet(){
        if(this.props.onPatientDiet){
            this.props.onPatientDiet();
        }
    }

    //跳转关联住院信息
    handlePatientAssociatHospital(){
        if(this.props.onPatientAssociatHospital){
            this.props.onPatientAssociatHospital();
        }
    }

    //跳转轮转信息
    handlePatientRotation(){
        if(this.props.onPatientRotation){
            this.props.onPatientRotation();
        }
    }

    //跳转住院变更信息
    handlePatientChangeHospital(){
        if(this.props.onPatientChangeHospital){
            this.props.onPatientChangeHospital();
        }
    }

    //跳转住院账户信息
    handlePatientAccount(){
        if(this.props.onPatientAccount){
            this.props.onPatientAccount();
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
                <RaisedButton
                    onClick={this.handleTouchTap}
                    label="more"
                    style={raiseStyle}
                    buttonStyle={buttonStyle}
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}
                    style={popoverStyle}
                >
                    <Menu menuItemStyle={{'width':'100px'}}>
                        <MenuItem primaryText="住院信息" onClick={this.handlePatientHospital}/>
                        <MenuItem primaryText="基本信息" onClick={this.handlePatientBasicInfor}/>
                        <MenuItem primaryText="过敏信息" onClick={this.handlePatientAllergy}/>
                        <MenuItem primaryText="饮食医嘱" onClick={this.handlePatientDiet}/>
                        <MenuItem primaryText="关联住院" onClick={this.handlePatientAssociatHospital}/>
                        <MenuItem primaryText="轮转信息" onClick={this.handlePatientRotation}/>
                        <MenuItem primaryText="住院变更" onClick={this.handlePatientChangeHospital}/>
                        <MenuItem primaryText="住院账户" onClick={this.handlePatientAccount}/>
                    </Menu>
                </Popover>
            </NavBackHeaderBar>
        )
    }
}

export default PatientInforHeaderBar;