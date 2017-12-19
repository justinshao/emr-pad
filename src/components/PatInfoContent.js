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
            inforId == 'patHospital' ? <PatHospital {...this.props}/> :
                inforId == 'patBasicInfor' ? <PatBasicInfor {...this.props}/> :
                    inforId == 'patAllergy' ? <PatAllergy {...this.props}/> :
                        inforId == 'patDiet' ? <PatDiet {...this.props}/> :
                            inforId == 'patAssociatHospital' ? <PatAssociatHospital {...this.props}/> :
                                inforId == 'patRotation' ? <PatRotation {...this.props}/> :
                                    inforId == 'patChangeHospital' ? <PatChangeHospital {...this.props}/> :
                                        inforId == 'patAccount' ? <PatAccount {...this.props}/> : <PatHospital {...this.props}/>
        );
        return (
            <div style={contentStyle}>
                {content}
            </div>
        )
    }
}

export default PatInfoContent;