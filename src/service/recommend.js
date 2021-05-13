import { get } from './base'

export function getRecommend () {
  return get('/api/getRecommend')
}
