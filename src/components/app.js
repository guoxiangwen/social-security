import React, {Component} from 'react';

import './app.less';



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
                                {/*<a rel="nofollow" href="https://www.lagou.com/app/download.html" className="lg_app"*/}
                                   {/*target="_blank">拉勾APP</a>*/}
                            </div>



                        </div>
                    </div>
                </div>

                <main className="main_container">
                    {this.props.children}
                </main>
            </div>
        );
    }
}


App.propTypes = {};

export default App
