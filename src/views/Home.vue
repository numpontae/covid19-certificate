<template>
  <div class="home" style="margin-top:2rem">
    <img alt="Samitivej" src="../assets/logo.png" style="height: 120px">
    <Index msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/page/Index.vue'

export default {
  name: 'Home',
  components: {
    Index
  }
}
</script>
