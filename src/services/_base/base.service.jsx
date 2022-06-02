import axios from 'axios'

const httpClient = baseURL => axios.create({
  timeout: 300000,
  headers: {
    'Content-type': 'application/json'
  },
  baseURL
})

const mountAuthHeader = (headers) => ({
  ...headers,
  'Authorization' : `Bearer ${localStorage.getItem('token-xpcodehub-login')}`
})

export class BaseService {
  constructor(baseURL) {
    this.client = httpClient(baseURL)
  }

  async get(url,  { authorized = true, ...config }) {
    if(authorized) {
      config.headers = mountAuthHeader(config.headers)
    }

     const result = await this.client.get(url, config).catch(this.returnToHomeIfNotLogged)

    return result.data
  }

  async post(url, body, { authorized = true, ...config }) {
    if(authorized) {
      config.headers = mountAuthHeader(config.headers)
    }
    const result = await this.client.post(url, body, config).catch(this.returnToHomeIfNotLogged)

    return result.data
  }

  async put(url, body,  { authorized = true, ...config }) {
    if(authorized) {
      config.headers = mountAuthHeader(config.headers)
    }

    const result = await this.client.put(url, body, config).catch(this.returnToHomeIfNotLogged)

    return result.data
  }

  async delete(url,  { authorized = true, ...config }) {
    if(authorized) {
      config.headers = mountAuthHeader(config.headers)
    }
    const result = await this.client.delete(url, config).catch(this.returnToHomeIfNotLogged)

    return result.data
  }

  returnToHomeIfNotLogged(error) {
    if(error.response.status === 403) {
      window.location.href = '/#/login';
    }
    throw error.response.data
  }
}
