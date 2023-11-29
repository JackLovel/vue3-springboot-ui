import axios from 'axios';
const baseURL = '/api';
const instance = axios.create({ baseURL })
import { ElMessage } from 'element-plus';

//添加请求拦截器
instance.interceptors.response.use(
    result => {
        if (result.data.code === 0) {
            return result.data
        }

        // 操作失败
        ElMessage.error(result.data.msg ? result.data.msg : '服务异常')
        // 异步操作的状态转为失败
        return Promise.reject(result.data)
    },
    err => {
        ElMessage.error('服务异常')
        //请求错误的回调
        return Promise.reject(err);
    }
)

export default instance;