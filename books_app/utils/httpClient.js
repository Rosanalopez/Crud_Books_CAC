import axios from "axios"

const API = "http://team5.com.ar/api/v1"
// const API = "http://localhost:3000/api/v1"

const localCookie = (username, role) => {
  localStorage.setItem('username', username)
  localStorage.setItem('role', role)
  console.log('Cookies seteadas')
  console.log(localStorage.getItem('username'))
  console.log(localStorage.getItem('role'))
}

const deleteCookies = () => {
  localStorage.removeItem('username')
  localStorage.removeItem('role')
}


export const get = async (url, param = '') => {
  let finalUrl = `${API}${url}`
  if (param !== '') {
    finalUrl = `${API}${url}/?${param}`
  }
  const response = await fetch(finalUrl,{
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': 'http://localhost:5173'
      },
  })
  const data = await response.json()
  return data
}

export const login = async (username, password, successUrl=null) => {
  try {
    const axiosInstance = axios.create({
      withCredentials: true
    })
    const response = await axiosInstance.post(`${API}/users/login`, {
      username,
      password
    }, { headers: {
        'Content-Type': 'application/json'
      }}
    )
    if (response.data.status === "success") {
      // Grabo los cookies información del usuario
      const role = response.data.data.user.role

      localCookie(username, role)
      console.log('Cookies seteadas')
      console.log(localStorage.getItem('username'))
      console.log(localStorage.getItem('role'))

      if (successUrl) {
        window.location.href = successUrl
      }
    } else {
      console.log(response.data)
    }
    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${API}/users/logout`, {}, { headers: {
        'Content-Type': 'application/json'
      }}
    )
    if (response.data.status === "success") {
      deleteCookies()
      window.location.href = "/login"
    } else {
      console.log(response.data)
    }

    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
};