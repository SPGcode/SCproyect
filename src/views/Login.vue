<template>
  <div>
    <v-main>
      <v-row class="text-center" justify="center">
        <v-col cols="6">
          <v-card class="indigo darken-4" elevation="5" dark>
            <v-card-text>New user</v-card-text>
            <v-row justify="center">
              <v-col class="ml-5" cols="12" md="6">
                <v-form
                @submit.prevent="logInUser({email: email, password: password})"
                >
                  <v-text-field
                    v-model="email"
                    label="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    v-model="password"
                    label="Password"
                    required
                  ></v-text-field>
                  <v-row class="d-flex justify-space-between">
                    <v-col cols="12" md="4">
                      <v-btn type="submit" class="amber darken-3" :disabled="block">
                        submit
                      </v-btn>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-btn class="red darken-2" @click="clean">
                        cancel
                      </v-btn>
                    </v-col>
                  </v-row>
                  <span> {{error}} </span>
                </v-form>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    computed: {
            ...mapState('userModule', ['userLogIn', 'error']),

            block() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.password.length > 5) {
        return false;
        }else{
        return true;
      }
    }
    },
    methods:{
        ...mapActions('userModule', ['logInUser']),

        clean() {
        this.email = "";
        this.password = "";
        }
    }
}
</script>