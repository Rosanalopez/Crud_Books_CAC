const API = "http://team5.com.ar/api/v1"

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