import request from '@utils/request.js'
import { userTokenStore } from '../store/token'

// 文章分类列表查询 
export const articleCategoryListService = () => {
    const tokenStore = userTokenStore()
    return request.get('/category', { headers: { 'Authorization': tokenStore.token } })
}