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

    constructor(props) {
        super(props);
        this.handleReportEchars = this.handleReportEchars.bind(this);
    }

    handleReportEchars() {
        if (this.props.onReportEchars) {
            this.props.onReportEchars();
        }
    }

    render() {
        let { regId,sourceType,content,reportType} = this.props;
        return (
            <div>
                {
                    content == 'exam' ? <ReportExamination regId={regId}/> :
                        content == 'ReportLaboratory' ? <ReportLaboratory regId={regId} onReportEchars={this.handleReportEchars} /> :
                            content == 'assay' ? <ReportLaboratoryX regId={regId} /> :
                                content == 'nursing' ? <ReportCareOrder regId={regId} /> :
                                    content == 'temp' ? <ReportTemperature regId={regId} /> :
                                        content == 'inPatOrder' ? <ReportDtAdvice regId={regId} /> :
                                            content == 'chnOrder' ? <ReportChDtAdvice regId={regId} /> :
                                                content == 'diag' ? <ReportDiag regId={regId} /> : <ReportTemperature regId={regId} />
                }
            </div>
        )
    }
}

export default ModuleView;