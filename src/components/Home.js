import React from 'react';
import PatList from './PatList';
import HomeHeaderBar from './HomeHeaderBar';
import { headerBarStyle, contentStyle, patListStyle } from '../styles';

const cellHeight = 270;
const cellHeightRow = 115;
const [minCellWidth, maxCellWidth] = [200, 250];
const [minCellWidthRow, maxCellWidthRow] = [350, 450];

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            col: 5,
            colRow: 5,
            changeType: false
        }

        this.handleSelectedWardChange = this.handleSelectedWardChange.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.handleExitAppRequest = this.handleExitAppRequest.bind(this);
        this.handleUserHomeRequest = this.handleUserHomeRequest.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
    }

    handleSelectedWardChange(wardId) {
        this.props.history.replace(`/home/${wardId}`);
    }
    handleWindowResize() {
        this.adaption();
    }
    handleExitAppRequest() {
        this.props.history.replace('/home');
    }
    handleUserHomeRequest() {
        this.props.history.push('/setting');
    }

    adaption() {
        const regin = document.body.clientWidth;

        if (minCellWidth * this.state.col > regin) {
            let col = this.state.col - 1;
            while (minCellWidth * col > regin) { col--; }

            this.setState({ col: Math.max(2, col) });
        } else if (maxCellWidth * this.state.col < regin) {
            let col = this.state.col + 1;
            while (maxCellWidth * col < regin) { col++; }

            this.setState({ col: col });
        }

        if (minCellWidthRow * this.state.colRow > regin) {
            let colRow = this.state.colRow - 1;
            while (minCellWidthRow * colRow > regin) { colRow--; }

            this.setState({ colRow: Math.max(1, colRow) });
        } else if (maxCellWidthRow * this.state.colRow < regin) {
            let colRow = this.state.colRow + 1;
            while (maxCellWidthRow * colRow < regin) { colRow++; }

            this.setState({ colRow: colRow });
        }
    }

    componentDidMount() {
        this.adaption();

        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleChangeType() {
        this.setState({
            changeType: !this.state.changeType
        })
    }

    render() {
        let { wardId } = this.props.match.params;
        let changeType = this.state.changeType;

        return (
            <div>
                <HomeHeaderBar wardId={wardId}
                    onSelectedWardChange={this.handleSelectedWardChange}
                    onExitAppRequest={this.handleExitAppRequest}
                    onUserHomeRequest={this.handleUserHomeRequest}
                    onChangeType={this.handleChangeType}
                    style={headerBarStyle} />
                <PatList wardId={wardId}
                    cellHeight={changeType ? cellHeightRow : cellHeight}
                    col={changeType ? this.state.colRow : this.state.col}
                    style={Object.assign({}, contentStyle, patListStyle)}
                    changeType={this.state.changeType} />
            </div>
        );
    }
}

export default Home;
