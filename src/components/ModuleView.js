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
        return (
            <div>
                <Route path='/ModuleWrapper/ReportExamination/:regId?' component={ReportExamination} />
                <Route path='/ModuleWrapper/ReportLaboratory/:regId?' component={ReportLaboratory} />
                <Route path='/ModuleWrapper/ReportLaboratoryX/:regId?' component={ReportLaboratoryX} />
                <Route path='/ModuleWrapper/ReportCareOrder/:regId?' component={ReportCareOrder} />
                <Route path='/ModuleWrapper/ReportTemperature/:regId?' component={ReportTemperature} />
                <Route path='/ModuleWrapper/ReportDtAdvice/:regId?' component={ReportDtAdvice} />
                <Route path='/ModuleWrapper/ReportChDtAdvice/:regId?' component={ReportChDtAdvice} />
                <Route path='/ModuleWrapper/ReportDiag/:regId?' component={ReportDiag} />
            </div>
        )
    }
}

export default ModuleView;