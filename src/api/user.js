import axios from './index';

export const getUserInfo=()=>{
  return axios.request({
    url:'/home/Test1',
    method:'get'
  })
}
