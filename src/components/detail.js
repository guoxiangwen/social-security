import React, {Component, PropTypes} from 'react';
import './detail.less'
import Http from "./../utils/http";
import {Modal,Steps, Button, message } from 'antd';
import {Link} from 'react-router'


const Step = Steps.Step;


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
            visible: false,
            current:0
        }
    }



    render() {
        return (
            <div className="position-content-r">
                <div className="jd_collection  job-collection">
                    <Link to={`/userInfo`}>
                        投个简历
                    </Link>
                </div>
                {/*<Modal title="Basic Modal" visible={this.state.visible} width={1024}*/}
                       {/*onOk={this.handleOk} onCancel={this.handleCancel}*/}
                       {/*maskClosable = {false}*/}
                {/*>*/}
                    {/*<div>*/}
                        {/*<Steps current={current}>*/}
                            {/*{steps.map(item => <Step key={item.title} title={item.title} />)}*/}
                        {/*</Steps>*/}
                        {/*<div className="steps-content">{steps[this.state.current].content}</div>*/}
                        {/*<div className="steps-action">*/}
                            {/*{*/}
                                {/*this.state.current < steps.length - 1*/}
                                {/*&&*/}
                                {/*<Button type="primary" onClick={() => this.next()}>Next</Button>*/}
                            {/*}*/}
                            {/*{*/}
                                {/*this.state.current === steps.length - 1*/}
                                {/*&&*/}
                                {/*<Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>*/}
                            {/*}*/}
                            {/*{*/}
                                {/*this.state.current > 0*/}
                                {/*&&*/}
                                {/*<Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>*/}
                                    {/*Previous*/}
                                {/*</Button>*/}
                            {/*}*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</Modal>*/}
            </div>
        )

    }
}


export default Detail;


