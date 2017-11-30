import React from 'react';
import PatientHospital from './PatientHospital';
import PatientBasicInfor from './PatientBasicInfor';
import PatientAllergy from './PatientAllergy';
import PatientDiet from './PatientDiet';
import PatientAssociatHospital from './PatientAssociatHospital';
import PatientRotation from './PatientRotation';
import PatientChangeHospital from './PatientChangeHospital';
import PatientAccount from './PatientAccount';

const contentStyle = {
    'width': '100%',
    'paddingTop': '64px'
};

class PatientInforContent extends React.Component {

    render() {
        let inforId = this.props.inforId;
        let content = (
            inforId == 'PatientHospital' ? <PatientHospital /> :
                inforId == 'PatientBasicInfor' ? <PatientBasicInfor /> :
                    inforId == 'PatientAllergy' ? <PatientAllergy /> :
                        inforId == 'PatientDiet' ? <PatientDiet /> :
                            inforId == 'PatientAssociatHospital' ? <PatientAssociatHospital /> :
                                inforId == 'PatientRotation' ? <PatientRotation /> :
                                    inforId == 'PatientChangeHospital' ? <PatientChangeHospital /> :
                                        inforId == 'PatientAccount' ? <PatientAccount /> : <PatientHospital />
        );
        return (
            <div style={contentStyle}>
                {content}
            </div>
        )
    }
}

export default PatientInforContent;