<template>
<div>
  <v-container>
    <v-row class="d-flex justify-center text-center">
      <v-col cols="6">
        <h1>Welcome {{name}} </h1>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <Tasks />
  </v-container>
</div>
</template>

<script>
import Tasks from '../components/Tasks'

  export default {
    name: 'Home',
    data() {
      return {
        name:"Sergio"
      }
    },
    components: {
      Tasks
    },
  }
</script>

<style scoped>
</style>
