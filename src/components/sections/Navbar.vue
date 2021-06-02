<template>
  <div>
    <v-toolbar dense class="app-bar text-justify-center indigo darken-4" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-row class="d-flex text-center" wrap>
        <v-col cols="6">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="6">
          <router-link
            to="/login"
            class="white--text mr-5"
            style="text-decoration: none"
          >
            <span>Log in</span>
          </router-link>
          <router-link
            to="/newuser"
            class="white--text"
            style="text-decoration: none"
          >
            <span>Sign up</span>
          </router-link>
          <v-btn
            @click="closeSesion"
            class="white--text ml-5"
            style="text-decoration: none"
          >Log out</v-btn>
        </v-col>
      </v-row>
    </v-toolbar>

    <v-navigation-drawer
      class="indigo darken-4"
      app
      v-model="drawer"
      temporary
      dark
    >
      <v-list-item>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg" />
        </v-list-item-avatar>
        <v-list-item-title> Sergio </v-list-item-title>
      </v-list-item>
      <v-row class="d-flex text-center mx-3">
        <v-col cols="12">
          <v-btn class="green accent-2" block :to="{ name: 'Home' }"
            >Home</v-btn
          >
        </v-col>
        <v-col cols="12">
          <v-btn class="green accent-2" block :to="{ name: 'Posts' }"
            >Posts</v-btn
          >
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  name: "Navbar",
  data() {
    return {
      title: "Social Media Entertaiment",
      drawer: false,
    };
  },
  methods: {
    ...mapActions('userModule', ['closeSesion'])
  }
};
</script>
<style scoped>
</style>