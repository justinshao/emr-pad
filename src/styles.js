import signpad from './images/signpad.jpg'

const headerBarHeight = 64;
const headerBarLoadingSize = 40;
const appThemeColor = 'rgb(0, 188, 212)';

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
    signBoardStyle
};