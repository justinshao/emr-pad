import React from 'react';
import { Route } from 'react-router-dom';
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
                    content == 'ReportExamination' ? <ReportExamination/> :
                    content == 'ReportLaboratory' ? <ReportLaboratory/> :
                    content == 'ReportLaboratoryX' ? <ReportLaboratoryX/> :
                    content == 'ReportCareOrder' ? <ReportCareOrder/> :
                    content == 'ReportTemperature' ? <ReportTemperature/> :
                    content == 'ReportDtAdvice' ? <ReportDtAdvice/> :
                    content == 'ReportChDtAdvice' ? <ReportChDtAdvice/> :
                    content == 'ReportDiag' ? <ReportDiag/> : <ReportLaboratory/>
                }
            </div>
        )
    }
}

export default ModuleView;