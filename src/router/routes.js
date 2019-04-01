//在注册路由时不会加载(请求获取)模块对应的打包文件,只有请求对应路由路径才会请求加载
const Home = () => import('../pages/Home/Home.vue')
const Category = () => import('../pages/Category/Category.vue')
const Things = () => import('../pages/Things/Things.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Search = () => import('../pages/Search/Search.vue')
const Login = () => import('../pages/Login/Login.vue')

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShow: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/things',
    component: Things,
    meta: {
      isShow: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShow: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home'
  }
]
