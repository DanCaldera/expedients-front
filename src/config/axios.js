import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: 'https://expedients-back.vercel.app',
})

export default clienteAxios
