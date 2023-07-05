let API = "http://team5.com.ar/api/v1"

// Vinculo con el backend localmente. Actualmente la sesión en team5.com.ar no funciona
// Aunque todo ok con postman
API = "http://localhost:3000/api/v1"

export const get = async (url) => {
  const response = await fetch(`${API}${url}`,{
  })
  const data = await response.json()
  return data
}

// TODO: Hacer un buen sistema de logueo
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API}/users/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': 'http://localhost:5173'
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      }),
      credentials: 'include'
    })
    await response.json().then(data => {
      console.log(data)
      return data
    })
  } catch (error) {
    console.log(error)
  }
};