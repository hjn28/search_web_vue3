import { defineStore } from 'pinia'

// 定义类型
interface MainBizState {
  // 左侧
  leftDialogVisible: boolean
  leftSelectId: number | null

  // 右侧
  rightDrawerVisible: boolean
  rightActiveTab: string

  // 跨左右分区共享数据
  sharedBizData: Record<string, any> | null
}

export const useMainBizStore = defineStore('mainBiz', {
  state: (): MainBizState => ({
    leftDialogVisible: false,
    leftSelectId: null,

    rightDrawerVisible: false,
    rightActiveTab: 'tab1',

    sharedBizData: null
  }),
  actions: {
    // 左侧弹窗控制
    openLeftDialog(id?: number) {
      if(id) this.leftSelectId = id
      this.leftDialogVisible = true
    },
    closeLeftDialog() {
      this.leftDialogVisible = false
    },

    // 右侧抽屉控制
    openRightDrawer(tab?: string) {
      if(tab) this.rightActiveTab = tab
      this.rightDrawerVisible = true
    },
    closeRightDrawer() {
      this.rightDrawerVisible = false
    },

    setSharedData(data: Record<string, any>) {
      this.sharedBizData = data
    },

    resetBizState() {
      // 重置全部业务状态，切换页面时调用
      this.$reset()
    }
  },
  getters: {
    // 派生计算属性
    getSelectedId: (state) => state.leftSelectId
  }
})