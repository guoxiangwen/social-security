import { render } from 'react-dom';
import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory  } from 'react-router';
import './main.less';



import App from './components/app';
import Detail from './components/detail';
import Index from './components/index';
import UserInfo from './components/userInfo';

import NotFound from './components/404';
import Demo from './components/demo';


/** 
 * 定义路由配置
 */

const ROUTER_CONFIG = [
    {
        path:'/',
        component:App,
        indexRoute: { component: Index },
        childRoutes:[
            {path:'index',component:Index},//主页
            {path:'detail/:id',component:Detail},//detail
            {path:'userInfo',component:UserInfo},//UserInfo
        ]

    },
    {
        path:'/demo',
        component:Demo
    },
    // {
    //     path:'/detail',
    //     component:Detail
    // },
    {
        path:'*',
        component:NotFound //404
    },
];
render((
  <Router history={hashHistory} routes={ROUTER_CONFIG} />
), document.getElementById('app'));