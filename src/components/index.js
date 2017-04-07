import React, {Component, PropTypes} from 'react';
import {Carousel, Tabs} from 'antd';
import {Link} from 'react-router'
import './app.less';
import Http from "./../utils/http";

const TabPane = Tabs.TabPane;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal:""
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            searchVal:e.target.value
        })
    }
    handleSearch(e){
        console.log(this.state.searchVal);
        e.preventDefault();
    }

    render() {
        return (
            <div className="content">
                <div id="search_box" className="search_box">
                    <form id="searchForm" className="searchForm" onSubmit={this.handleSearch}>
                        <input type="text" className="search_input" onChange={this.handleChange} placeholder="搜索职位"/>
                        <input type="submit" className="search_button"  value="搜索"/>
                    </form>
                </div>
                <dl className="hotSearch">
                    <dt>热门搜索:</dt>
                    <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">招谁惹谁来陌陌</a></dd>
                    <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">前端架构师</a></dd>
                    <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">运维</a></dd>
                    <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">架构师</a></dd>
                    <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">Java高级工程师</a></dd>
                    <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">PHP高级工程师</a></dd>
                    <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">Go高级工程师(游戏端)</a>
                    </dd>

                </dl>
                {/*走马灯*/}
                <Carousel autoplay>
                    <div><img src="./../imgs/b.jpg" alt=""/></div>
                    <div><img src="./../imgs/a-1.jpg" alt=""/></div>
                </Carousel>
                {/*tab切换*/}
                <Tabs defaultActiveKey="1">
                    <TabPane tab="所有职位" key="1">
                        {/*jobList*/}
                        <JobList searchKey={this.state.searchVal} urlHandler="touristSearchJobHander"/>
                    </TabPane>
                    <TabPane tab="推荐职位" key="2">
                        <RecJobList urlHandler="touristRecmdJobHandler"/>

                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

Index.PropTypes = {};
class RecJobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
    }

    componentDidMount() {
        this.search();
    }
    search(){
        Http.post('/renshemobile/tourist/native', JSON.stringify({
            "handler": this.props.urlHandler,
        })).then(res => {
            this.setState({
                lists: JSON.parse(res.data).data
            })
        }).catch(err => {
            console.error(err);
        })
    }

    render() {
        const lists = this.state.lists;
        // console.log("list:",lists)
        return (
            <div className="jobList">
                <ul>
                    {
                        lists.map(item => {
                            return (
                                <li className="job-item" key={item.id}>
                                    <div className="job">
                                        <div className="job-left">
                                            <div className="position_name">
                                                <h2 className="fl">
                                                    <Link to={`/detail/${item.id}`}>{item.jobName}
                                                        <span>[{item.area}]</span>
                                                    </Link>
                                                    {/*<a href="https://www.lagou.com/jobs/1643858.html">{item.jobName}*/}
                                                    {/*<span>[{item.area}]</span>*/}
                                                    {/*</a>*/}
                                                </h2>
                                                <span className="fl">{item.crtime}</span>
                                            </div>

                                            <div className="position_main_info">
                                                <span className="salary fl">{item.lowSalary}-{item.highSalary}</span>
                                            </div>
                                        </div>
                                        <div className="job-right">
                                            <div className="company_name wordCut">
                                                <a href="https://www.lagou.com/gongsi/120635.html">{item.enterpriseName}</a>

                                            </div>

                                        </div>

                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>



        )
    }
}

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
        this.search = this.search.bind(this)
    }

    componentDidMount() {
        this.search();
    }
    componentWillReceiveProps(nextProps) {
        console.log("this.props.searchKey:",this.props.searchKey);

        console.log("searchKey:",nextProps.searchKey);
        this.search(nextProps.searchKey);

    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
        // return this.props.searchKey !== nextProps.searchKey;
    }
    search(key){
        Http.post('/renshemobile/tourist/native', JSON.stringify({
            "handler": this.props.urlHandler,
            "sub": {
                "keyWord": key,
                "start": 0,
                "offset": 10
            }
        })).then(res => {
            if(JSON.parse(res.data).code === "4000"){
                this.setState({
                    lists: []
                })
            }
            // console.log("res:",res);
            this.setState({
                lists: JSON.parse(res.data).data
            })
        })
    }

    render() {
        const lists = this.state.lists;
        console.log("list:",lists)

        if(lists.length === 0){
            return(
                <div className="jobList">
                    <p>没有找到</p>
                </div>
            )
        }
        return (
            <div className="jobList">
                <ul>
                    {
                        lists.map(item => {
                            return (
                                <li className="job-item" key={item.id}>
                                    <div className="job">
                                        <div className="job-left">
                                            <div className="position_name">
                                                <h2 className="fl">
                                                    <Link to={`/detail/${item.id}`}>{item.jobName}
                                                        <span>[{item.area}]</span>
                                                    </Link>
                                                    {/*<a href="https://www.lagou.com/jobs/1643858.html">{item.jobName}*/}
                                                    {/*<span>[{item.area}]</span>*/}
                                                    {/*</a>*/}
                                                </h2>
                                                <span className="fl">{item.crtime}</span>
                                            </div>

                                            <div className="position_main_info">
                                                <span className="salary fl">{item.lowSalary}-{item.highSalary}</span>
                                            </div>
                                        </div>
                                        <div className="job-right">
                                            <div className="company_name wordCut">
                                                <a href="https://www.lagou.com/gongsi/120635.html">{item.enterpriseName}</a>

                                            </div>

                                        </div>

                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>



        )
    }
}


export default Index;


