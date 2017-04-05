/**
 * Created by guoxiangwen on 2017/4/5.
 */
/**
 * Created by guoxiangwen on 2016/11/2.
 * @description http类
 */


import axios from "axios";
import {browserHistory} from "react-router";


//全局设置 request configuration
// axios.defaults.headers.common['Authorization'] = LocalStorage.getStr("CH_TOKEN");
axios.defaults.headers.post['Content-Type'] = 'application/text';

export default class Http {
    /**
     * 封装get请求
     * @param url
     * @param paramsObj
     */
    static get(url, paramsObj) {
        // console.log("请求的token:", LocalStorage.getStr("CH_TOKEN"));
        return axios({
            method: 'get',
            url: url,
            // headers: {'Authorization': LocalStorage.getStr("CH_TOKEN")},
            withCredentials: true,
            params: paramsObj,
            responseType: 'json',
            timeout: 50000
        })
            .catch(err => {
                console.error("Http发生错误:", err.response);
                if (err.response.status == 401) {
                    browserHistory.push('/login')
                }
            })


    }

    /**
     * 封装post请求
     * @param url
     * @param body
     */
    static post(url, body) {
        return axios({
            method: 'post',
            url: url,
            // headers: {'Authorization': LocalStorage.getStr("CH_TOKEN")},
            // withCredentials: true,
            data: body,
            responseType: 'text',
            timeout: 50000
        })
            .catch(err => {
                console.error("Http发生错误:", err.response)
                // if (err.response.status == 401) {
                //     browserHistory.push('/login')
                // }

            })

    }

    /**
     * 封装delete请求
     * @param url
     * @param paramsObj
     */
    static delete(url, paramsObj) {
        return axios({
            method: 'delete',
            url: url,
            // headers: {'Authorization': LocalStorage.getStr("CH_TOKEN")},
            withCredentials: true,
            params: paramsObj,
            responseType: 'json',
            timeout: 50000
        })
            .catch(err => {
                console.error("Http{delete}发生错误:", err.response.data)
                if (err.response.status == 401) {
                    browserHistory.push('/login')
                }

            })

    }


    static postOutToken(url, body) {
        return axios({
            method: 'post',
            url: url,
            data: body,
            responseType: 'json',
            timeout: 5000
        })
    }
}
