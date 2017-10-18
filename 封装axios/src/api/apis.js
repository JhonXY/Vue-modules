import fetch from '@/utils/fetch'

// 一个get型的调用
// 当然我自己的并没有做跨域处理:)
export function getArticles(query) {
  return fetch({
    baseURL: 'http://www.chunibyo.org',
    url: '/api/articleList',
    method: 'get',
    params: query  // 需要注意的是get一定要将url后缀信息放入params中
  })
}

// 一个post型的调用
// 用的别人的接口，有点慢，容易超时
export function login(username, password) {
  const data = {
    username,
    password
  }
  return fetch({
    // 这里的覆盖会产生问题，所以尽量还是别覆盖baseURL的好
    // 也就是说如果有多个baseURL的请求，最好单独传入baseURL
    baseURL: 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin', // 可覆盖
    url: '/user/login',
    method: 'post',
    // post则无相关约束，传入一个对象即可
    data  
  })
}