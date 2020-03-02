import jsonp from 'jsonp'

class HttpRequest {
  // get请求
  static get (api) {
    return new Promise((resolve, reject) => {
      jsonp(api, null, (err, res) => {
        if (!err) {
          resolve(res)
        }
        reject(err)
      })
    })
  }
}

export const baseURL = 'http://ims.861718.com'
export const Headers = {
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'multipart/form-data'
  }
}
export default HttpRequest
