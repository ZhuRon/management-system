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