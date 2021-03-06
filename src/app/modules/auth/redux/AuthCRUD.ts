import axios from 'axios'
import {AuthModel} from '../models/AuthModel'
import {UserModel} from '../models/UserModel'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post('https://preview.keenthemes.com/metronic8/laravel/api/login?email=admin@demo.com&password=demo')
   // return axios.get(LOGIN_URL, {
  //   params: {
  //     email: email,
  //     password: password,
  //   },
  // })
}

// Server should return AuthModel
export function register(email: string, firstname: string, lastname: string, password: string) {
  return axios.post<AuthModel>(REGISTER_URL, {
    email,
    firstname,
    lastname,
    password,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.get<{result: boolean}>(REQUEST_PASSWORD_URL, {
    params: {
      email: email,
    },
  })
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {api_token:"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi"})
}
