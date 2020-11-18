import { httpGet, httpPost } from '../utils/http'
import base from './base'

export const getBanners = () => {
  return httpGet(base.baseURL + base.banners)
}

export const login = (data) => {
  return httpPost(base.baseURL + base.login, data)
}