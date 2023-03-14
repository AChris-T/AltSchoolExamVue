<template>
  <Navbar/>
  <RouterView />
</template>

<script>
import NavbarVue from './components/Navbar.vue'
//import { RouterLink, RouterView } from 'vue-router'
import Navbar from "../src/components/Navbar.vue"
  export default{
    name:"App",
    components:{
      Navbar,
    }
    
  }
</script>

<style scoped>

</style>
