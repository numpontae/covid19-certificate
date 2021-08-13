<template>
  <div class="home" >
    <div style="margin-top:2rem;text-align:center">
    <img alt="Samitivej" src="../assets/logo.png" style="height: 120px">
    </div>
    <Index/>
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
