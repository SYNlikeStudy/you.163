import ajax from './ajax'

//mock数据
export const reqHomeData = () => ajax('/homeData')
export const reqCategoryData = () => ajax('/category')
export const reqCategoryListData = () => ajax('/categoryList')

//网易数据
export const reqSearchInitialData = () => ajax('/api/xhr/search/init.json')//搜索的初始化显示数据
export const reqThingsNav = () => ajax('/api/topic/v1/find/getTabs.json')//things的导航数据
export const reqThingsData = () => ajax('/api/topic/v1/find/recManual.json')//things的数据

//服务器
export const reqCode = (phone) => ajax( '/local/sendcode', {phone})//获取手机验证码
export const reqLoginPhone = (phone,code) => ajax( '/local/login_sms', {phone,code}, 'POST')//手机登陆
export const reqLoginEmail = (email,pwd) => ajax( '/local/login_email', {email,pwd}, 'POST')// 邮箱登陆
export const reqUserInfo = () => ajax( '/local/userinfo')// 请求用户
export const reqLogout = () => ajax( '/local/logout')// 退出登录
