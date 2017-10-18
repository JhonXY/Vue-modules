<template>
  <div>
    <h1>{{ list[0] }}</h1>
  </div>
</template>

<script>
import { getArticles, login } from '@/api/apis'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[],
      page: 10,
      pageSize: 10,
      count: 0
    }
  },
  mounted () {
    this.getArticlesList()
    this.loginIn()
  },
  methods: {
    getArticlesList () {
      let params = {
        page: this.page,
        pageSize: this.pageSize
      }
      getArticles(params).then(result => {
        let res = result.data
        console.log(result)
        this.list = res.result.list
      }, err => {
        console.log('catch1' + err)
      })
      // 两种错误的处理方式，可以直接then中对err进行处理
      // 也可继续调用catch对错误进行处理，先调用的先生效
      // .catch(err => {
      //   console.log('catch2' + err)
      // })
    },
    // 外套一层promise的写法，尽量在vuex的actions中都这样写
    // 当然一般的methods也可以这么写
    loginIn () {
      return new Promise((resolve, reject) => {
        let username = 'admin'
        let password = 'admin'
        login(username, password).then(response => {
          const data = response.data
          console.log(response)
          console.log(data)
          resolve()
        }).catch(error => {
          console.log('loginErr ' + error)
          reject(error)
        })
      })
    },
    // loginIn() {
    //   let username = 'admin'
    //   let password = 'admin'
    //   login(username, password).then(response => {
    //     const data = response.data
    //     console.log(response)
    //     console.log(data)
    //   }).catch(error => {
    //     console.log('loginErr ' + error)
    //   })
    // }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
