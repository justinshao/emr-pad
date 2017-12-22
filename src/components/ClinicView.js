import React from 'react';
import ReportExamination from './ReportExamination';
import ReportLaboratory from './ReportLaboratory';
// import ReportLaboratoryX from './ReportLaboratoryX';
import ReportCareOrder from './ReportCareOrder';
import ReportConsultReq from './ReportConsultReq';
import ReportTemperature from './ReportTemperature';
import ReportDtAdvice from './ReportDtAdvice';
import ReportChDtAdvice from './ReportChDtAdvice';
import ReportDiag from './ReportDiag';
import ReportPathology from './ReportPathology';

class ClinicView extends React.Component {

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
        let { content } = this.props;
        return (
            <div>
                {
                    // content == 'firstPage' ? <病案首页/> :
                    content == 'exam' ? <ReportExamination {...this.props} /> :
                        content == 'pathlg' ? <ReportPathology {...this.props} /> :
                            content == 'assay' ? <ReportLaboratory {...this.props} /> :
                            content == 'con' ? <ReportConsultReq {...this.props} /> :
                                // content == 'assay' ? <ReportLaboratoryX {...this.props}/> :
                                content == 'nursing' ? <ReportCareOrder {...this.props} /> :
                                    content == 'temp' ? <ReportTemperature {...this.props} /> :
                                        content == 'order' ? <ReportDtAdvice {...this.props} /> :
                                            content == 'chnOrder' ? <ReportChDtAdvice {...this.props} /> :
                                                content == 'diag' ? <ReportDiag {...this.props} /> : <ReportTemperature {...this.props} />
                }
            </div>
        )
    }
}

export default ClinicView;