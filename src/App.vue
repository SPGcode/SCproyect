<template>
  <v-app>
    <v-container fluid>
        <Navbar />
    </v-container>
    <v-main>
      <router-view/>
    </v-main>
    <v-container>
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from './components/sections/Navbar'
import Footer from './components/sections/Footer'

export default {
  name: "App",
  components:{
    Navbar,
    Footer
  },
  data: () => ({
    
  })
}
</script>
<style scoped>

</style>
