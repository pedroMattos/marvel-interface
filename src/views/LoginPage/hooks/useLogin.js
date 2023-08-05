import axios from 'axios'

export default function useLogin() {

  const login = async (email, password) => {
    
    const response = await axios.post('http://localhost:5000/login', { email, password })

    if (!response.data.authenticated) {
      return { hasError: true, error: response.data.error }
    }
    return { hasError: false, error: null }
  }

  return { login }
}