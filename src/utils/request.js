import axios from 'axios';
const baseURL = '/api';
const instance = axios.create({ baseURL })

//添加请求拦截器
instance.interceptors.response.use(
    result => {
        return result.data;
    },
    err => {
        //请求错误的回调
        return Promise.reject(err);
    }
)

export default instance;