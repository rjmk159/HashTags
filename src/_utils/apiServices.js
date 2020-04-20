import axios from 'axios';

let api = {};

api.get=(url)=>{
  return new Promise((resolve,reject)=>{
    axios.get(url)
  .then((response)=>{
    resolve(response)
  })
  .catch((error)=> {
    reject(error)
  })
  })
}
export default api;