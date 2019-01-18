
import Cookies from 'js-cookie'
export const setTitle = (title) => {
  window.document.title = title || '测试'
}

export const setToken = (token, expires, tokenName = 'token') => {
  Cookies.set(tokenName, token, { expires: new Date(new Date() + expires - 60 * 20) })
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
