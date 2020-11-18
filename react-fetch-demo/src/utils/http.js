import qs from "querystring"
/**
 * get post
 */
export function httpGet(url) {
  const result = fetch(url)
  return result
}

export function httpPost(url, data) {
  const result = fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json,text/plain,*/*'
    },
    body: qs.stringify(data)
  })
  return result
}