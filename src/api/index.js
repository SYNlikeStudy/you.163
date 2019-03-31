import ajax from './ajax'

export const reqHomeData = () => ajax('/homeData')
export const reqCategoryData = () => ajax('/category')
export const reqCategoryListData = () => ajax('/categoryList')
