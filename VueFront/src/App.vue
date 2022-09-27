<template>

<!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
  
  <router-view/>
</template>


<script>
import navvv from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    navvv
  }
}
</script>
<style>

</style>