import ajax from './ajax'

export const reqHomeData = () => ajax('/homeData')
export const reqCategoryData = () => ajax('/category')
export const reqCategoryListData = () => ajax('/categoryList')

/*http://m.you.163.com/xhr/search/init.json*/
export const reqSearchData = () => ajax('/api/xhr/search/init.json')

const result = reqSearchData()
console.log(result);
