import React from 'react';
import { Route } from 'react-router-dom';
import ReportExamination from './ReportExamination';
import ReportLaboratory from './ReportLaboratory';
import ReportCareOrder from './ReportCareOrder';
import ReportTemperature from './ReportTemperature';
import ReportDtAdvice from './ReportDtAdvice';
import ReportChDtAdvice from './ReportChDtAdvice';
import ReportDiag from './ReportDiag';

class ModuleView extends React.Component {
    render() {
        return (
            <div>
                <Route path="/ModuleWrapper/ReportExamination" component={ReportExamination} />
                <Route path='/ModuleWrapper/ReportLaboratory' component={ReportLaboratory} />
                <Route path='/ModuleWrapper/ReportCareOrder/:painterId?/:reportId?' component={ReportCareOrder} />
                <Route path='/ModuleWrapper/ReportTemperature/:painterId?' component={ReportTemperature} />
                <Route path='/ModuleWrapper/ReportDtAdvice/:painterId?' component={ReportDtAdvice} />
                <Route path='/ModuleWrapper/ReportChDtAdvice/:painterId?' component={ReportChDtAdvice} />
                <Route path='/ModuleWrapper/ReportDiag/:painterId?' component={ReportDiag} />
            </div>
        )
    }
}

export default ModuleView;