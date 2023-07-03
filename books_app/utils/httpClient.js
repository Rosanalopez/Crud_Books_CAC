const API = "http://team5.com.ar/api/v1"

export const get = async (url) => {
  const response = await fetch(`${API}${url}`,{
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': 'http://localhost:5173'
      },
  })
  const data = await response.json()
  return data
}