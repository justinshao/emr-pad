import React from 'react';
import Paper from 'material-ui/Paper';
import { Icon } from 'semantic-ui-react';
import { getInHospitalInfo } from '../service';

const style = {
    width: '90%',
    margin: '5%',
    padding: ' 5% 7%',
    borderRadius: '10px',
    backgroundColor: 'rgb(0, 188, 212)',
    color: 'white',
    lineHeight: '1.6'
};
const person = {
    position: 'absolute',
    top: '26px',
    right: '24px'
};

class PatInfoWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.handlePaitentInfor = this.handlePaitentInfor.bind(this);
    }

    componentDidMount() {
        let { regId } = this.props;

        getInHospitalInfo(regId)
            .then(data => {
                this.setState({ data: data })
            })
    }

    // 跳转病人信息
    handlePaitentInfor() {
        if (this.props.onPaitentInfor) {
            this.props.onPaitentInfor();
        }
    }

    render() {
        return (
            <div onClick={this.handlePaitentInfor}>
                <Paper style={style} zDepth={1}>
                    <div>病人：{this.state.data.Name}</div>
                    <div>性别：{this.state.data.Sex}</div>
                    <div>年龄：{this.state.data.BirthDay}</div>
                    <div>住院号：{this.state.data.VisitNo}</div>
                    <div style={person}><Icon name='user circle' size='big' /></div>
                </Paper>
            </div>
        )
    }
}

export default PatInfoWrapper;