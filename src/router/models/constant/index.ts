import  Layout  from '@/layout/index.vue'

export const constantRoutes = [
  /* {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/dashborad',
    chidlren: [
      {
        path: 'dashborad',
        name: 'home',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          hidden: false
        }
      },
    ],
  }, */
  {
    path:'/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect:'/dashborad',
    meta: {
      title: '布局',
      icon: 'HomeFilled',
      hidden: false
    },
    children:[
      {
        path:'dashborad',
        name: 'home',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          hidden: false
        }
      }
    ]
  },
  {
    path: '/sys',
    name: 'sys',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: 'Setting',
      hidden: false
    },
    children: [
      {
        path: '/sys/user',
        name: 'sys',
        component: () => import('@/views/sys/user/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'user',
          hidden: false
        }
      },
      
      {
        path: '/sys/role',
        name: 'role',
        component: () => import('@/views/sys/role/index.vue'),
        meta: {
          title: '权限管理',
          icon: 'UserFilled',
          hidden: false
        }
      },
      {
        path: '/sys/log',
        name: 'log',
        component: () => import('@/views/sys/log/index.vue'),
        meta: {
          title: '系统日志',
          icon: 'Files',
          hidden: false
        },
        children: [
          {
            path: '/sys/login-log',
            name: 'login-log',
            component: () => import('@/views/sys/log/login-log/index.vue'),
            meta: {
              title: '登录日志',
              icon: 'DArrowRight',
              hidden: false
            }
          },
          {
            path: '/sys/operation-log',
            name: 'login-log',
            component: () => import('@/views/sys/log/operation-log/index.vue'),
            meta: {
              title: '操作日志',
              icon: 'operation',
              hidden: false
            }
          }
        ]
      }
    ]
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/errors/403.vue'),
    meta: {
      title: '403',
      icon: '403',
      hidden: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/errors/404.vue'),
    meta: {
      title: '404',
      icon: '404',
      hidden: true
    }
  },
  {
    path: '/502',
    name: '502',
    component: () => import('@/views/Dashboard.vue'),
    meta: {
      title: '502',
      icon: '502',
      hidden: true
    }
  },
  {
    path: '/504',
    name: '504',
    component: () => import('@/views/errors/504.vue'),
    meta: {
      title: '504',
      icon: '504',
      hidden: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      icon: 'login',
      hidden: true
    }
  }
]
