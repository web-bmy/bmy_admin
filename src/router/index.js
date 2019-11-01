import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)
/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: '引导页', icon: 'guide', noCache: true }
      }
    ]
  }
]
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [{
  path: '/error',
  component: Layout,
  redirect: 'noredirect',
  name: 'ErrorPages',
  meta: {
    title: '错误页面',
    icon: '404'
  },
  children: [
    {
      path: '401',
      component: () => import('@/views/errorPage/401'),
      name: 'Page401',
      meta: { title: '401', noCache: true }
    },
    {
      path: '404',
      component: () => import('@/views/errorPage/404'),
      name: 'Page404',
      meta: { title: '404', noCache: true }
    },
  ]
},
{
  path: '/permission',
  component: Layout,
  redirect: '/permission/index',
  alwaysShow: true, // will always show the root menu
  meta: {
    title: '权限测试页',
    icon: 'lock',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [
    {
      path: 'page',
      component: () => import('@/views/permission/page'),
      name: 'PagePermission',
      meta: {
        title: '页面权限',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'directive',
      component: () => import('@/views/permission/directive'),
      name: 'DirectivePermission',
      meta: {
        title: '指令权限'
        // if do not set roles, means: this page does not require permission
      }
    }
  ]
},
{
  path: '/sysManage',
  component: Layout,
  redirect: 'noredirect',
  alwaysShow: true,
  meta: {
    title: '系统管理',
    icon: 'setting',
    roles: ['admin']
  },
  children: [
    {
      path: 'userManage',
      component: () => import('@/views/sysMange/userManage'),
      name: 'UserManage',
      meta: {
        icon: 'user',
        title: '用户管理',
        roles: ['admin']
      }
    },
    {
      path: 'roleManage',
      component: () => import('@/views/sysMange/roleManage'),
      name: 'RoleManage',
      meta: {
        icon: 'role',
        title: '角色管理',
        roles: ['admin']
      }
    }
  ]
},
{ path: '*', redirect: '/404', hidden: true }
]