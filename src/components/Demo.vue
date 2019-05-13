<template>
  <div id="app">
    <h1>hello</h1>
    <h2>this common part</h2>
    <router-link to="/c1">c1</router-link>
    <router-link to="/c2">c2</router-link>
    <button @click="fun">click</button>
    <router-view/>
  </div>

</template>

<script>
  export default {
    name: 'Demo',
    data () {
      return{

      }
    },
    methods:{
      fun(){
        this.$http.jsonp('https://www.apiopen.top/journalismApi', {}, {
          headers: {

          },
          emulateJSON: true
        }).then(function(response) {
          // 这里是处理正确的回调

          console.log(response)
          //this.articles = response.data.subjects
          // this.articles = response.data["subjects"] 也可以

        }, function(response) {
          // 这里是处理错误的回调
          console.log(response)
        });
      }
    }
  }
</script>

<style>

</style>
