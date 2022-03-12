const apiUrl = "http://nyx.vima.ekt.gr:3000/api/books"

export const postData = async ({ page, itemsPerPage, filters }) => { 
  
  const params = JSON.stringify({
    page, itemsPerPage, filters
  })

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: params,
  }
 
  const response = await fetch(apiUrl, requestOptions)
  return response.status === 200 ? response.json() : response.statusText

}


