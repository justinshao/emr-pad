import React from 'react';

const style = {
  height: 100,
  width: 140,
  marginTop:100,
  display: 'inline-block',
  fontSize:'24px',
  fontWeight:'600',
};


class ModuleViewer extends React.Component{

    render(){
        return(
          <div style={style}>此处为正文</div>
        )
    }
}

export default ModuleViewer;