import signpad from './images/signpad.jpg'

const headerBarHeight = 64;
const headerBarLoadingSize = 40;
const appThemeColor = 'rgb(0, 188, 212)';
const titleStyle = {
    textAlign: 'center',
    lineHeight: '2.8',
    margin: '0',
    fontWeight: '600',
    color: '#3c3c3c'
};
const headerBarStyle = {
    position: 'fixed',
    paddingRight: '0px',
    paddingLeft: '16px'
};
const contentStyle = {
    width: '100%',
    paddingTop: `${headerBarHeight}px`,
    boxSizing: 'border-box'
};
const fullContentStyle = Object.assign({}, contentStyle, {
    height: '100%',
    overflow: 'auto'
});
const patListStyle = {
    padding: `${headerBarHeight + 20}px 20px 20px 20px`
};
const headerBarLoadingStyle = {
    marginTop: `${(headerBarHeight - headerBarLoadingSize) / 2}px`,
    size: headerBarLoadingSize
};
const headerBarDDMenuStyle = {
    marginTop: '0px',
    label: {
        color: 'white'
    }
};
const headerBarBtnStyle = {
    color: 'white',
    height: 'inherit'
};
const catalogWrapperStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%'
};
const errorStyle = {
    color: 'red'
};
const contentCenter = {
    textAlign: 'center'
};
const writingBoardStyle = {
    'backgroundImage': `url(${signpad})`,
    'backgroundSize': 'contain'
};
const signBoardStyle = {
    boxShadow: '1px 1px 5px #888888'
};
const tableHeader = {
    backgroundColor: 'rgba(0, 188, 212,0.4)',
    height: '30px',
    lineHeight: '1',
    padding: '0',
    textAlign: 'center',
    fontSize: '13px',
    color: 'white'
};
const tableContent = {
    height: '26px',
    lineHeight: '1.2',
    padding: '2px 6px',
    textAlign: 'center',
    fontSize: '12px',
    whiteSpace: 'normal',
    textOverflow: 'no',
    wordWrap: 'break-word',
    border: '1px #f1f1f1 solid'
};
const content = {
    float: 'left',
    fontSize: 14,
    width: '76%',
    lineHeight: '1.6',
    letterSpacing: '1px',
    textAlign: 'justify'
};
const containerStyle = {
    marginTop: '14px',
    border: '1px #EAEAEA solid'
};
const spanStyle = {
    paddingRight: '16px'
};
const tableOutTitle = {
    lineHeight: '30px',
    backgroundColor: 'rgba(0, 188, 212,0.65)',
    borderWidth: '0px 1.5px',
    borderColor: 'white',
    borderStyle: 'solid',
    marginTop: '1.5px'
};
const bodyHeight = document.body.clientHeight;
const wrapperStyle = {
    height: `${bodyHeight}` - 100,
    overflowY: 'hidden'
};
const cardtitle = {
    fontSize: 14,
    float: 'left',
    lineHeight: '1.6',
    margin: '0',
    width: '20%'
};
const cardstyle = {
    padding: '10px'
};

export {
    headerBarStyle,
    contentStyle,
    fullContentStyle,
    patListStyle,
    headerBarLoadingStyle,
    headerBarDDMenuStyle,
    headerBarBtnStyle,
    catalogWrapperStyle,
    contentCenter,
    errorStyle,
    appThemeColor,
    writingBoardStyle,
    signBoardStyle,
    titleStyle,
    tableHeader,
    tableContent,
    content,
    containerStyle,
    spanStyle,
    tableOutTitle,
    wrapperStyle,
    cardtitle,
    cardstyle
};