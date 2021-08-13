<template>
  <div class="home">
    <!-- <img alt="Samitivej" src="../assets/logo.png" style="height: 120px"> -->
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
