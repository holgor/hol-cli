import request from '../request'
/**
 * DEMO: 获取所有猫猫
 */
export function getCats () {
  return request({
    url: '/cat/getCats',
    method: 'get'
  })
}