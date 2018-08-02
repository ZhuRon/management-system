export const apiname = () => fetch('')
export const getCaptchChas = () => new Promise((resolve, reject) => {
  fetch('https://elm.cangdu.org/v1/captchas', {
    method: 'POST',
    body: {},
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})
export const getStore = name => { if (!name) return; return window.localStorage.getItem(name) }
export const accountLogin = (username, password) => fetch('/v2/login', {username, password}, 'POST')
export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST')
export const getUser = () => fetch('/v1/user', {user_id: getStore('user_id')})