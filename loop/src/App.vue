<template>
  <div id="app">    
    <my-loop :list="list" :option="option"></my-loop>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list: [
        {
          src: "http://blog.img.chunibyo.org/card.jpg"
        },
        {
          src: "http://blog.img.chunibyo.org/xiyang.png"
        },
        {
          src: "http://blog.img.chunibyo.org/%E5%B1%85%E4%B8%AD1.png"
        }
      ],
      option: true
    }
  }
}
</script>
