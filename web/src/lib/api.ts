import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

// base da URL para chamados de API
