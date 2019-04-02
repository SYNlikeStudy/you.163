import ajax from './ajax'

//mock数据
export const reqHomeData = () => ajax('/homeData')
export const reqCategoryData = () => ajax('/category')
export const reqCategoryListData = () => ajax('/categoryList')

//网易数据
/*http://m.you.163.com/xhr/search/init.json*/
export const reqSearchInitialData = () => ajax('/api/xhr/search/init.json')//搜索的初始化显示数据
export const reqThingsNav = () => ajax('/api/topic/v1/find/getTabs.json')//things的导航数据
export const reqThingsData = () => ajax('/api/topic/v1/find/recManual.json')//things的数据
