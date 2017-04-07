import React, {Component, PropTypes} from 'react';
import './userInfo.less'
import Http from "./../utils/http";
// import {Modal,Steps, Button, message } from 'antd';
import {Link} from 'react-router'


class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {}
        }
    }

    componentDidMount() {
        // console.log(this.props.params.id)
        // Http.post('/renshemobile/tourist/native', JSON.stringify({
        //     "handler": "touristDetailJobHandler",
        //     "sub": {
        //         "userId": "0392a04ce2d04db4a0371e07d00edc23",
        //         "jobId": this.props.params.id
        //     }
        // })).then(res => {
        //     console.log(JSON.parse(res.data).data)
        //     this.setState({
        //         job: JSON.parse(res.data).data
        //     })
        // }).catch(err => {
        //     console.error(err);
        // })
    }

    render() {
        return (
            <div className="my_resume">
                <div className="head">
                    <div className="top_bg">
                        {/*<img src="//www.lgstatic.com/images/myresume/default_headpic.png" alt="默认头像" width="120"*/}
                        {/*height="120" className="mr_headimg" />*/}

                    </div>
                    {/*基本信息*/}
                    <BaseInfo />
                </div>
                <div className="content">
                    {/*工作经历*/}
                    <ExpInfo />
                    {/*教育经历*/}
                    <EduInfo />
                    {/*项目经历*/}
                    <ProInfo />
                    {/*语言能力*/}
                    <LanInfo />
                </div>
            </div>
        );
    }
}

UserInfo.PropTypes = {};


class BaseInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }

    componentDidMount() {
        Http.post('/renshemobile/tourist/native', JSON.stringify({
            "handler": "detailUserInfoHandler",
            "sub": {
                "userId": "0392a04ce2d04db4a0371e07d00edc23"
            }
        })).then(res => {
            console.log("基本信息:",res.data)
            this.setState({
                data: JSON.parse(res.data).data
            })
        }).catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
            <div className="base_info">
                <div className="name">
                    <span className="mr_edit"><i></i><em>编辑</em></span>
                    <span className="mr_name">张三</span>
                </div>
                <div className="introduce">
                    <span className="mr_edit "><i></i><em>编辑</em></span>
                    <span className="mr_intro">我是一个好人</span>
                </div>
                <div className="info">
                    <div className="info_t">
                                <span className="shenfen">
                                    <em>软件开发工程师 · 四川长虹电器股份有限公司</em>
                                </span>
                    </div>
                    <div className="info_j">
                                <span className="info_base">
                                    <em>男</em>
                                    <em>本科</em>
                                    <em>3年工作经验</em>
                                    <em className="info_city">绵阳</em>
                                </span>
                    </div>
                    <div className="info_b">
                        <span className="mobile"><em>15008187156</em></span>
                        <span className="email"><em>297236521@qq.com</em></span>
                    </div>
                    <span className="mr_edit mr_edit_on">
                                <i></i>
                                <em>编辑</em>
                            </span>
                </div>
            </div>
        )
    }
}
class ExpInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }

    componentDidMount() {
        Http.post('/renshemobile/tourist/native', JSON.stringify({
            "handler": "getWorkExperHandler",
            "sub": {
                "userId": "0392a04ce2d04db4a0371e07d00edc23"
            }
        })).then(res => {
            console.log("工作经验：",res.data)
            this.setState({
                data: JSON.parse(res.data).data
            })
        }).catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
            <div className="item_container_target">
                <div className="mr_moudle_head mr_w604">
                    <div className="mr_head_l">
                        <div className="mr_title">
                            <span className="mr_title_l"></span>
                            <span className="mr_title_c">工作经历</span>
                            <span className="mr_title_r"></span>
                        </div>
                    </div>
                </div>
                <div className="mr_moudle_content mr_w604">
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                </div>
            </div>
        )
    }
}
class EduInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }

    componentDidMount() {
        Http.post('/renshemobile/tourist/native', JSON.stringify({
            "handler": "getEducationHandler",
            "sub": {
                "userId": "0392a04ce2d04db4a0371e07d00edc23"
            }
        })).then(res => {
            console.log("教育经历:",res.data)
            this.setState({
                data: JSON.parse(res.data).data
            })
        }).catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
            <div className="item_container_target">
                <div className="mr_moudle_head mr_w604">
                    <div className="mr_head_l">
                        <div className="mr_title">
                            <span className="mr_title_l"></span>
                            <span className="mr_title_c">教育经历</span>
                            <span className="mr_title_r"></span>
                        </div>
                    </div>
                </div>
                <div className="mr_moudle_content mr_w604">
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                </div>
            </div>
        )
    }
}
class ProInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }

    componentDidMount() {
        Http.post('/renshemobile/tourist/native', JSON.stringify({
            "handler": "getProjectExperHandler",
            "sub": {
                "userId": "0392a04ce2d04db4a0371e07d00edc23"
            }
        })).then(res => {
            console.log("项目经历:",res.data)
            this.setState({
                data: JSON.parse(res.data).data
            })
        }).catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
            <div className="item_container_target">
                <div className="mr_moudle_head mr_w604">
                    <div className="mr_head_l">
                        <div className="mr_title">
                            <span className="mr_title_l"></span>
                            <span className="mr_title_c">项目经历</span>
                            <span className="mr_title_r"></span>
                        </div>
                    </div>
                </div>
                <div className="mr_moudle_content mr_w604">
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                </div>
            </div>
        )
    }
}
class LanInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }

    componentDidMount() {
        Http.post('/renshemobile/tourist/native', JSON.stringify({
            "handler": "getLanguageHandler",
            "sub": {
                "userId": "0392a04ce2d04db4a0371e07d00edc23"
            }
        })).then(res => {
            console.log("语言经历:",res.data)
            this.setState({
                data: JSON.parse(res.data).data
            })
        }).catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
            <div className="item_container_target">
                <div className="mr_moudle_head mr_w604">
                    <div className="mr_head_l">
                        <div className="mr_title">
                            <span className="mr_title_l"></span>
                            <span className="mr_title_c">语言能力</span>
                            <span className="mr_title_r"></span>
                        </div>
                    </div>
                </div>
                <div className="mr_moudle_content mr_w604">
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                    <span>sdfsdfsf/</span>
                </div>
            </div>
        )
    }
}
export default UserInfo;


