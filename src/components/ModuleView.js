import React from 'react';
import ReportExamination from './ReportExamination';
import ReportLaboratory from './ReportLaboratory';
import ReportLaboratoryX from './ReportLaboratoryX';
import ReportCareOrder from './ReportCareOrder';
import ReportTemperature from './ReportTemperature';
import ReportDtAdvice from './ReportDtAdvice';
import ReportChDtAdvice from './ReportChDtAdvice';
import ReportDiag from './ReportDiag';

class ModuleView extends React.Component {
    render() {
        let { content,regId } = this.props;

        return (
            <div>
                {
                    content == 'ReportExamination' ? <ReportExamination regId={regId}/> :
                    content == 'ReportLaboratory' ? <ReportLaboratory  regId={regId}/> :
                    content == 'ReportLaboratoryX' ? <ReportLaboratoryX  regId={regId}/> :
                    content == 'ReportCareOrder' ? <ReportCareOrder  regId={regId}/> :
                    content == 'ReportTemperature' ? <ReportTemperature  regId={regId}/> :
                    content == 'ReportDtAdvice' ? <ReportDtAdvice  regId={regId}/> :
                    content == 'ReportChDtAdvice' ? <ReportChDtAdvice  regId={regId}/> :
                    content == 'ReportDiag' ? <ReportDiag  regId={regId}/> : <ReportLaboratory  regId={regId}/>
                }
            </div>
        )
    }
}

export default ModuleView;