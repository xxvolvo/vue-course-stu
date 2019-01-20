import Mock from 'mockjs'
import { baseURL } from '@/config'

import { getUserInfo } from './response/user'
import { getTableData} from './response/data'
Mock.mock(`${baseURL}/home/Test1`,'get', getUserInfo)
Mock.mock(`${baseURL}/getTableData`,'get', getTableData)
// Mock.setup({
//   timeout: 500
// })
export default Mock
