import request from '../utils/request.js'

export const userRegisterService = (registerData) => {
    // 存放查询字符串
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key])
    }
    return request.post('/user/register', params)
}


// 提供调用登录接口的函数
export const userLoginService = (loginData) => {
    // 存放查询字符串
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, loginData[key])
    }
    return request.post('/user/login', params)
}