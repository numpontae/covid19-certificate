<template>
  <div class="home" style="margin-top:2rem">
    <img alt="Samitivej" src="../assets/logo.png" style="height: 120px">
    <Result msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Result from '@/page/Result.vue'

export default {
  name: 'Home',
  components: {
    Result
  }
}
</script>
