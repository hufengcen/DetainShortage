import AjaxClient from 'ajax/restful/client'

export function registLogin (params) {
  return AjaxClient.post('http://106.12.28.16/saveUser', params)
}
