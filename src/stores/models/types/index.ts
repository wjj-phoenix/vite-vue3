import type { RouteRecordRaw } from 'vue-router'

//定义小仓库数据state类型
export interface MenuState {
  menus: RouteRecordRaw[]
}