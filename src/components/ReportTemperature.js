import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const contentstyle={
    'paddingTop':64, 
};
const style = {
    'marginLeft': 20,
};

class ReportTemperature extends React.Component {
    render() {
        return (
            <Paper zDepth={2} style={contentstyle}>
                <TextField hintText="体温1" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="体温2" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="体温3" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="体温4" style={style} underlineShow={false} />
                <Divider />
            </Paper>
        )

    }
}

export default ReportTemperature;