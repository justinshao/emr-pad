import React from 'react';

const styles = {
    tile: {
        padding: '5px'
    },
    text: {
        color: 'white',
        padding: '5px'
    },
    name: {
        padding: '5px 10px',
        backgroundColor: '#00bcd4',
        color: 'white',
        display: 'inline-block',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        margin: '10px 0px 5px 16px'
    },
    horn: {
        position: 'absolute',
        width: '0px',
        height: '0px',
        borderLeft: '10px solid transparent',
        borderTop: '10px solid transparent',
        borderRight: '10px solid white',
        borderBottom: '10px solid white',
        right: '8px',
        bottom: '8px'
    },
    hornLebal: {
        position: 'absolute',
        width: '0px',
        height: '0px',
        borderLeft: '18px solid transparent',
        borderTop: '18px solid #ffd52d',
        borderRight: '18px solid #ffd52d',
        borderBottom: '18px solid transparent',
        top: '0px',
        right: '0px',
        borderRadius: '5px'
    },
    eme: {
        position: 'absolute',
        right: '0px',
        top: '45px',
        backgroundColor: 'transparent',
        padding: '3px 5px',
        color: 'white'
    },
    eme1: {
        backgroundColor: '#1fbba6'
    },
    eme2: {
        backgroundColor: 'red'
    },
    bed: {
        display: 'inline-block',
        position: 'absolute',
        transform: 'rotate(-45deg)',
        'WebkitTransform': 'rotate(-45deg)',
        backgroundColor: 'white',
        color: '#0096a9',
        padding: '3px 10px',
        width: '80px',
        textAlign: 'center',
        left: '-22px',
        top: '4px'
    },
    visitNoBox: {
        position: 'absolute',
        top: '20px',
        left: '125px'
    },
    ageBox:{
        marginLeft:'21px'
    }
}

class PatTile extends React.Component {

    render() {
        let pat = this.props.pat;

        return (
            <div style={styles.tile}>
                <div style={styles.bed}>{pat.BedCode}</div>
                <div style={styles.name}>{pat.Name}</div>
                <div style={styles.ageBox}>
                    <div style={styles.text}>性别：{pat.Sex}</div>
                    <div style={styles.text}>年龄：{pat.Age}</div>
                </div>
                <div style={styles.visitNoBox}>
                    <div style={styles.text}>住院号：{pat.VisitNo}</div>
                    <div style={styles.text}>住院医师：{pat.ResidentDoctor}</div>
                    <div style={styles.text}>住院天数：{pat.Days}天</div>
                </div>
                <div style={styles.horn}></div>
                <div style={styles.hornLebal}></div>
                <div style={Object.assign({}, styles.eme, pat.EmeLevel == 1 ? styles.eme1 : pat.EmeLevel == 2 ? styles.eme2 : {})}>
                    {pat.EmeLevel == 1 ? '危重' : pat.EmeLevel == 2 ? '急救' : ''}
                </div>
                <div style={styles.care}></div>
            </div>
        );
    }
}

export default PatTile;