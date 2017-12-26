import React from 'react';

const titlestyle = {
    textAlign: 'center',
    lineHeight: '1.8',
    margin: '0',
    fontWeight: '600',
    color: '#3c3c3c'
};
const detail = {
    color: '#999999',
    lineHeight: '1',
    textAlign: 'center',
    margin: '0 0 16px 0',
    fontWeight: '500'
};
const detailstyle = {
    color: '#999999',
    lineHeight: '2',
    textAlign: 'left',
    marginTop: '6px',
    fontWeight: '500'
};

class ReportTitle extends React.Component {
    constructor(props) {
        super(props);
        this.handleLinkTo = this.handleLinkTo.bind(this);
    }

    handleLinkTo() {
        let url = this.props.webUrl;
        window.open(url, '_blank');
    }

    render() {
        let none = this.props.ifshow ? 'none' : '';
        return (
            <div style={{ padding: '15px' }}>
                <h3 style={titlestyle}>{this.props.title}</h3>
                <h6 style={detail}>（此单仅供本院医生参考用，不做证明用）</h6>
                <h5 style={detailstyle}>
                    {this.props.detailHeader}
                    <div style={{ color: '#0072e3', fontWeight: '500', display: none }} onClick={this.handleLinkTo}> 查看详细报告>></div>
                </h5>
                {/* 插入报告正文 */}
                {this.props.children}
                <h5 style={detailstyle}>{this.props.detailBottom}</h5>
            </div>
        )
    }
}

export default ReportTitle;