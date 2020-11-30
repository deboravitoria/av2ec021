const axios = require('axios').default

async function login( username, password ) {
  const res = await axios.post('https://ec021-av2-auth.herokuapp.com/auth/login', { username, password })
  return res.data
}

async function validate( token ) {
  const res = await axios.post('https://ec021-av2-auth.herokuapp.com/auth/validateToken', {}, { headers: { 'token': token }})
  return res.data
}

module.exports = { login, validate }