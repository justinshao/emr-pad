import React from 'react';
import PatHospital from './PatHospital';
import PatBasicInfor from './PatBasicInfor';
import PatAllergy from './PatAllergy';
import PatDiet from './PatDiet';
import PatAssociatHospital from './PatAssociatHospital';
import PatRotation from './PatRotation';
import PatChangeHospital from './PatChangeHospital';
import PatAccount from './PatAccount';

const contentStyle = {
    'width': '100%',
    'paddingTop': '64px'
};

class PatInfoContent extends React.Component {

    render() {
        let inforId = this.props.inforId;
        let content = (
            inforId == 'PatHospital' ? <PatHospital /> :
                inforId == 'PatBasicInfor' ? <PatBasicInfor /> :
                    inforId == 'PatAllergy' ? <PatAllergy /> :
                        inforId == 'PatDiet' ? <PatDiet /> :
                            inforId == 'PatAssociatHospital' ? <PatAssociatHospital /> :
                                inforId == 'PatRotation' ? <PatRotation /> :
                                    inforId == 'PatChangeHospital' ? <PatChangeHospital /> :
                                        inforId == 'PatAccount' ? <PatAccount /> : <PatHospital />
        );
        return (
            <div style={contentStyle}>
                {content}
            </div>
        )
    }
}

export default PatInfoContent;