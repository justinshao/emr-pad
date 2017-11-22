import signpad from './images/signpad.jpg'

const headerBarHeight = 64;
const headerBarLoadingSize = 40;
const appThemeColor = 'rgb(0, 188, 212)';

// 自定义报告标题样式
const titleStyle={
    'textAlign': 'center',
    'lineHeight': '2.8',
    'margin': '0',
    'fontWeight': '600'
};

const headerBarStyle = {
    position: 'fixed',
    paddingRight: '0px'
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
    lineHeight: '1',
    padding: '0',
    textAlign: 'center',
    fontSize: '12px'
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
    tableContent
};