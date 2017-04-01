import React, {Component} from 'react';
import { Carousel,Tabs  } from 'antd';
import logo from './../imgs/logo.svg';
import './app.less';

const TabPane = Tabs.TabPane;



class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                <header>
                    <a rel="nofollow" href="http://www.changhong.com">
                        {/*<img src="https://www.lgstatic.com/i/image/M00/C3/3E/Cgp3O1jbjeeAIiqEAAFTtu7Jc0g484.JPG" alt=""/>*/}
                    </a>
                </header>
                {/*顶部toolbar*/}
                <div className="top_toolbar">
                    <div className="top_tbar">
                        <div className="inner">
                            <div className="lg_tbar_l">
                                <a rel="nofollow" href="https://www.lagou.com/app/download.html" className="lg_app"
                                   target="_blank">拉勾APP</a>
                                {/*<a rel="nofollow" href="https://hr.lagou.com/dashboard/" className="lg_os">进入企业版</a>*/}
                            </div>
                            {/*<ul className="lg_tbar_r">*/}
                            {/*<li className="msg_dropdown" data-lg-tj-track-code="index_message">*/}
                            {/*<a className="msg_group" href="javascript: void 0;" data-lg-tj-id="5h00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">*/}
                            {/*消息*/}
                            {/*<em className="msg_amount hide" id="headMsgAmount"></em>*/}
                            {/*</a>*/}
                            {/*<div className="lg_msg_popup">*/}
                            {/*<div className="lg_msg_pu_body" id="lgPopupMsgBody"><div className="no_body"><p className="lg_msg_avatar no_msg_i">暂时没有新的消息~</p></div></div>*/}
                            {/*<div className="lg_msg_pu_footer">*/}
                            {/*<a href="https://www.lagou.com/message/settingsdetail.html" target="_blank" className="lg_msg_setting fl"><i className="lg_msg_avatar setting_i" data-lg-tj-id="18B0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></i>&nbsp;</a>*/}
                            {/*<a href="https://www.lagou.com/message/msgdetail.html" className="lg_msg_more fr" data-lg-tj-id="18A0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">查看更多</a>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<a href="https://www.lagou.com/resume/myresume.html" className="bl" data-lg-tj-id="5700" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow" data-lg-tj-track-code="index_resume">我的简历</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<a href="https://www.lagou.com/mycenter/delivery.html" className="bl" id="deliveryLink" data-lg-tj-id="5800" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow" data-lg-tj-track-code="index_deliver" data-lg-tj-track-type="1">投递箱</a>*/}
                            {/*<em className="noticeDot dn" id="noticeDot_delivery"></em>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<a href="https://www.lagou.com/mycenter/collections.html" className="bl" data-lg-tj-id="5900" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow" data-lg-tj-track-code="index_favorite" data-lg-tj-track-type="1">收藏夹</a>*/}
                            {/*</li>*/}
                            {/*<li className="user_dropdown" data-lg-tj-track-code="index_user">*/}
                            {/*<span className="unick bl">郭向文</span>*/}
                            {/*<em className="noticeDot dn" id="noticeDot_name"></em>*/}
                            {/*<i></i>*/}
                            {/*<ul>*/}
                            {/*<li>*/}
                            {/*<a href="https://www.lagou.com/s/subscribe.html" data-lg-tj-id="5a00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">我的订阅</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<a href="https://www.lagou.com/mycenter/invitation.html" id="invitationLink" data-lg-tj-id="5b00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow" data-lg-gatj-msg="header_c,职位邀请,number">职位邀请</a>*/}
                            {/*<em className="noticeDot dn" id="noticeDot_invitation"></em>*/}
                            {/*</li>*/}

                            {/*<li>*/}
                            {/*<a href="https://account.lagou.com/account/cuser/userInfo.html" data-lg-tj-id="5c00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">帐号设置</a>*/}
                            {/*</li>*/}

                            {/*<li>*/}
                            {/*<a href="https://hr.lagou.com/dashboard/" data-lg-tj-id="5d00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">去企业版</a>*/}
                            {/*</li>*/}

                            {/*<li>*/}
                            {/*<a href="/frontLogout.do" data-lg-tj-id="5e00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">退出</a>*/}
                            {/*</li>*/}
                            {/*</ul>*/}
                            {/*</li>*/}
                            {/*</ul>*/}


                        </div>
                    </div>
                </div>

                <main className="main_container">
                    <div className="content">
                        <div id="search_box" className="search_box">
                            <form id="searchForm" className="searchForm">
                                <input type="text" className="search_input" maxLength={64} placeholder="搜索职位、公司或地点"/>
                                <input type="submit"  className="search_button" value="搜索"/>
                            </form>
                        </div>
                        <dl className="hotSearch">
                            <dt>热门搜索:</dt>
                            <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">招谁惹谁，来陌陌</a></dd>
                            <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">前端架构师</a></dd>
                            <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">运维</a></dd>
                            <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">架构师</a></dd>
                            <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">Java高级工程师</a></dd>
                            <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">PHP高级工程师</a></dd>
                            <dd><a href="https://activity.lagou.com/topic/momo.html" target="_blank">Go高级工程师(游戏端)</a></dd>

                        </dl>
                        {/*走马灯*/}
                        <Carousel autoplay>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="推荐职位" key="1">推荐职位</TabPane>
                            <TabPane tab="所有职位" key="2">所有职位</TabPane>
                        </Tabs>

                    </div>


                    {/*<List />*/}
                </main>
                <footer></footer>
            </div>
        );
    }
}
class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const lists = [{
            id: 1,
            href: 'https://www.awesomes.cn/repo/facebook/react',
            src: './../imgs/logo.jpg',
            title: 'react',
            desc: 'Facebook 推出的一款声明式的，高效的，灵活的用于创建用户接口的JavaScript 库'
        },
            {
                id: 2,
                href: 'http://es6.ruanyifeng.com/',
                src: './../imgs/es6.jpg',
                title: 'es6',
                desc: 'Babel is a JavaScript compiler.Use next generation JavaScript, today.'
            },
            {
                id: 3,
                href: 'http://babeljs.io/',
                src: './../imgs/babel.jpg',
                title: 'babel',
                desc: 'Babel is a JavaScript compiler.Use next generation JavaScript, today.'
            },
            {
                id: 4,
                href: 'http://webpack.github.io/',
                src: './../imgs/webpack.jpg',
                title: 'webpack',
                desc: '前端MODULE BUNDLER'
            },
            {
                id: 5,
                href: 'http://facebook.github.io/jest/',
                src: './../imgs/jest.svg',
                title: 'jest',
                desc: '🃏 Painless JavaScript Testing'
            },
            {
                id: 6,
                href: 'https://github.com/ReactTraining/react-router',
                src: './../imgs/jest.svg',
                title: 'react-router',
                desc: '基于react的路由'
            },
        ];
        return (
            <div>
                {
                    lists.map((item) => {
                        return (
                            <section key={item.id}>
                                <a href={item.href} className="app-item">
                                    {/*<img src={item.src} alt="pic" className="app-item-logo" />*/}
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </a>
                            </section>

                        )

                    })
                }
            </div>



        )
    }
}

App.propTypes = {};

export default App
