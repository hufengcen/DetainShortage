import AjaxClient from 'ajax/restful/client'

export function registLogin(params) {
  return AjaxClient.get('http://106.12.28.16/student', params)
}
