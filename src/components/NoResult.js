import React from 'react';

const textStyle={
    'textAlign':'center',
    'color':'#999999',
    'fontWeight':'500'
}
class NoResult extends React.Component{
    render(){
        return(
            <div>
                <h2 style={textStyle}>未出结果</h2>
            </div>
        )
    }
}

export default NoResult;