import React, {Component, PropTypes} from 'react';
import './detail.less'
import Http from "./../utils/http";


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {}
        }
    }

    componentDidMount() {
        console.log(this.props.params.id)
        Http.post('/renshemobile/tourist/native', JSON.stringify({
            "handler": "touristDetailJobHandler",
            "sub": {
                "userId": "0392a04ce2d04db4a0371e07d00edc23",
                "jobId": this.props.params.id
            }
        })).then(res => {
            console.log(JSON.parse(res.data).data)
            this.setState({
                job: JSON.parse(res.data).data
            })
        }).catch(err => {
            console.error(err);
        })
    }

    render() {
        const job = this.state.job;
        return (
            <div className="position-head">
                <div className="position-content">
                    <div className="position-content-l">
                        <div className="job-name">
                            <div className="company">{job.enterpriseName}</div>
                            <span className="name">{job.jobName}</span>
                        </div>
                        <dd className="job_request">
                            <p>
                                <span className="salary">{job.lowSalary}-{job.highSalary}</span>
                                <span>/{job.area}/</span>
                                <span>{job.education}/</span>
                                <span>{job.jobLife}</span>
                            </p>
                            <p className="publish_time">{job.crtime}</p>
                        </dd>
                    </div>

                    <Resume />
                </div>
            </div>

        );
    }
}

Detail.PropTypes = {};

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false
        }
        this.showModal = this.showModal.bind(this);
    }
    showModal (){

    }

    render() {
        return (
            <div className="position-content-r">
                <div className="jd_collection  job-collection">投个简历</div>
                <Modal title="Basic Modal" visible={this.state.visible}
                       onOk={this.handleOk} onCancel={this.handleCancel}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </div>
        )

    }
}


export default Detail;


