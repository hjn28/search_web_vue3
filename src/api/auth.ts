import request from '@/utils/request'

// 登录接口
export function loginApi(data: { account: string; password: string }) {
  return request.post('/login', data)
}