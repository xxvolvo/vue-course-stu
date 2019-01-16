import Mock from 'mockjs'
import { baseURL } from '@/config'

import { getUserInfo } from './response/user'

Mock.mock(`${baseURL}/home/Test1`,'get', getUserInfo)
// Mock.setup({
//   timeout: 500
// })
export default Mock
