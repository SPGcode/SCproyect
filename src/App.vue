<template>
  <v-app>
    <v-container fluid>
        <Navbar />
    </v-container>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/sections/Navbar'

export default {
  name: "App",
  components:{
    Navbar
  },
  data: () => ({
    
  })
}
</script>
<style scoped>

</style>
