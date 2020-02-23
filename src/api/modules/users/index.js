import http from '@/utils/http'

const resquest = '/user'

export function getSingleUserByOpenid (params) {
  return http.get(`${resquest}/findUser/`, params)
}
