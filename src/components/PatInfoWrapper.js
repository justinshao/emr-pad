import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    width:'90%',
    margin:'5%',
    padding:' 5% 7%',
    borderRadius:'10px',
    backgroundColor:'rgb(0, 188, 212)',
    color:'white',
    lineHeight:'1.6'
};

class PatInfoWrapper extends React.Component {
    render() {
        return (
            <div>
                <Paper style={style} zDepth={1}>
                    <div>病人：</div>
                    <div>性别：</div>
                    <div>年龄：</div>
                    <div>住院号：</div>
                    更多>>
                </Paper>
            </div>
        )
    }
}

export default PatInfoWrapper;