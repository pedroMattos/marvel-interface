import axios from 'axios'

export default function useLogin() {
  const pattern = /^[\w\.-]+@[\w\.-]+\.\w+$/

  const login = async (email, password) => {
    if (!pattern.test(email)) return { hasError: true, error: 'Email inválido' }

    console.log('ta vindo aq')
    const response = await axios.post('http://localhost:5000/login', { email, password })

    if (!response.data.authenticated) {
      return { hasError: true, error: response.data.error }
    }

    localStorage.setItem('token', response.data.token)
    return { hasError: false, error: null }
  }

  return { login }
}