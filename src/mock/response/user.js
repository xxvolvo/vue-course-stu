
import Mock from 'mockjs'
export const getUserInfo = options => {
  const Random = Mock.Random

  const template = {
    // 'str|2-10': '1',
    // 'name|5': 'x',
    // 'age|+2': 0,
    // 'price|4-10': 0,
    // 'float|0-1.1-4': 0,
    // 'Is|1': true,
    // 'Is2|1-1': true
    'random': Random.image()
  }
  // let arr = []
  // let i = 3
  // while (i--) {
  //   arr.push(template);
  // }

  return Mock.mock(template)
}
