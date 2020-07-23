import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: 'https://store-management-back.vercel.app',
})

export default clienteAxios
