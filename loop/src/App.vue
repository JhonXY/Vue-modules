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
          src: "http://blog.img.chunibyo.org/card.jpg"
        },
        {
          src: "http://blog.img.chunibyo.org/card.jpg"
        }
      ],
      option: true
    }
  }
}
</script>
