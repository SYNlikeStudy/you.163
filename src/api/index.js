import ajax from './ajax'

export const reqHomeData = () => ajax('/homeData')
export const reqCategoryData = () => ajax('/category')
export const reqCategoryListData = () => ajax('/categoryList')

/*http://m.you.163.com/xhr/search/init.json*/
export const reqSearchInitialData = () => ajax('/api/xhr/search/init.json')
