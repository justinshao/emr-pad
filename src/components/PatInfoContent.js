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
            inforId == 'patHospital' ? <PatHospital /> :
                inforId == 'patBasicInfor' ? <PatBasicInfor /> :
                    inforId == 'patAllergy' ? <PatAllergy /> :
                        inforId == 'patDiet' ? <PatDiet /> :
                            inforId == 'patAssociatHospital' ? <PatAssociatHospital /> :
                                inforId == 'patRotation' ? <PatRotation /> :
                                    inforId == 'patChangeHospital' ? <PatChangeHospital /> :
                                        inforId == 'patAccount' ? <PatAccount /> : <PatHospital />
        );
        return (
            <div style={contentStyle}>
                {content}
            </div>
        )
    }
}

export default PatInfoContent;