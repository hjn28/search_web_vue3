import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

interface UserState {
  token: string | null
  username: string | null
  userId: number | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: Cookies.get('token') || null,
    username: null,
    userId: null
  }),
  actions: {
    setLogin(info: { token: string; username: string; userId: number }) {
      this.token = info.token
      this.username = info.username
      this.userId = info.userId
      Cookies.set('token', info.token, { expires: 7 })
    },
    logout() {
      this.token = null
      this.username = null
      this.userId = null
      Cookies.remove('token')
    }
  }
})