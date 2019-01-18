import axios from './index';

export const getUserInfo=()=>{
  return axios.request({
    url:'/home/Test1',
    method:'get'
  })
}
export const login=({username,password})=>{
  return axios.request({
    url:'/api/TokenAuth/Authenticate',
    method:'post',
    data:{
      UserNameOrEmailAddress:username,
      Password:password
    }
  })
}
