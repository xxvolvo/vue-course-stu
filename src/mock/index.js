import Mock from 'mockjs'
import { baseURL } from '@/config'

import { getUserInfo } from './response/user'
import { getTableData,getFileList,getFolderList} from './response/data'
Mock.mock(`${baseURL}/home/Test1`,'get', getUserInfo)
Mock.mock(`${baseURL}/getTableData`,'get', getTableData)
Mock.mock(/\/getFileList/, 'get', getFileList)
Mock.mock(/\/getFolderList/, 'get', getFolderList)
// Mock.setup({
//   timeout: 500
// })
export default Mock
