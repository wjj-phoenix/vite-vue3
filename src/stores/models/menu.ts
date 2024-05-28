//创建路由相关的仓库
import { defineStore } from 'pinia'
import type { MenuState } from './types'

import { constantRoutes } from '@/router/models/constant'

// 创建路由仓库
export const useMenuStore = defineStore('menu', {
  // 仓库存储数据地方
  state: (): MenuState => {
    return {
      menus: constantRoutes, //仓库存储生成菜单需要数组(路由)
    }
  },
  // 异步|逻辑的地方
  actions: {
    
  },
  getters: {},
})
