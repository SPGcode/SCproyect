<template>
  <div>
    <v-container class="mt-5">
      <v-row wrap  class="d-flex justify-space-between text-center">
        <v-col class="ml-5"  cols="12" sm="4">
          <v-select
          class="d-flex"
          :items= "items"
          >
          </v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <h2 class="secondary--text">Log in as...</h2>
          <h1>{{user.email}}</h1>
        </v-col>
      </v-row>
      <v-row>
       <v-container>
          <Tasks />
       </v-container>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
import Tasks from "../components/Tasks";
import { mapState } from 'vuex'

export default {
  name: "Home",
  data() {
    return {
      name: "Sergio",
      items: ['author', 'date', 'relevance']

    };
  },
  components: {
    Tasks,
  },
  computed:{
    ...mapState('userModule', ['user'])
  }
};
</script>

<style scoped>
</style>
