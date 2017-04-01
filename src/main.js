import { render } from 'react-dom';
import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './main.less';



import App from './components/app';

import NotFound from './components/404';
import Demo from './components/demo';


/** 
 * 定义路由配置
 */

const ROUTER_CONFIG = [
    {
        path:'/',
        component:App
    },
    {
        path:'/demo',
        component:Demo
    },
    {
        path:'*',
        component:NotFound //404
    },
];
render((
  <Router history={browserHistory} routes={ROUTER_CONFIG} />
), document.getElementById('app'));