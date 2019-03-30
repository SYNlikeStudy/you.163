//在注册路由时不会加载(请求获取)模块对应的打包文件,只有请求对应路由路径才会请求加载
const Home = () => import('../pages/Home/Home.vue')
const Category = () => import('../pages/Category/Category.vue')
const Things = () => import('../pages/Things/Things.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/things',
    component: Things
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect: '/home'
  }
]
