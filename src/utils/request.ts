import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const service = axios.create({
  baseURL: 'http://127.0.0.1:3000/api', // Nest后端接口地址
  timeout: 10000
})

// 请求拦截，自动带上token
service.interceptors.request.use(config => {
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers.Authorization = `Bearer ${userStore.token}`
  }
  return config
})

// 响应拦截
service.interceptors.response.use(
  resp => resp.data,
  err => {
    if (err.response?.status === 401) {
      const userStore = useUserStore()
      userStore.logout()
      router.push('/login')
      ElMessage.error('登录已过期，请重新登录')
    } else {
      ElMessage.error(err.message || '请求失败')
    }
    return Promise.reject(err)
  }
)

export default service