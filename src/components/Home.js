import React from 'react';
import PatList from './PatList';
import HomeHeaderBar from './HomeHeaderBar';
import { headerBarStyle, contentStyle, patListStyle } from '../styles';

const cellHeight = 270;
const [ minCellWidth, maxCellWidth ] = [ 200, 250 ];

class Home extends React.Component {

    state = {
        col: 5
    }

    constructor(props) {
        super(props);

        this.handleSelectedWardChange = this.handleSelectedWardChange.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.handleExitAppRequest = this.handleExitAppRequest.bind(this);
        this.handleUserHomeRequest = this.handleUserHomeRequest.bind(this);
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

        if(minCellWidth * this.state.col > regin){
            let col = this.state.col - 1;
            while(minCellWidth * col > regin){ col--; }

            this.setState( { col: Math.max(2, col) } );
        }else if(maxCellWidth * this.state.col < regin){
            let col = this.state.col + 1;
            while(maxCellWidth * col < regin){ col++; }

            this.setState( { col: col } );
        }
    }

    componentDidMount() {
        this.adaption();

        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    render() {
        let { wardId } = this.props.match.params;

        return (
            <div>
                <HomeHeaderBar wardId={ wardId }
                    onSelectedWardChange={ this.handleSelectedWardChange }
                    onExitAppRequest={this.handleExitAppRequest}
                    onUserHomeRequest={this.handleUserHomeRequest}
                    style={ headerBarStyle } />
                <PatList wardId={ wardId } cellHeight={ cellHeight } col={ this.state.col }
                    style={ Object.assign({}, contentStyle, patListStyle) } />
            </div>
        );
    }
}

export default Home;
