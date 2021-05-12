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
                @submit.prevent="getNewUser({mail: mail, password: password})"
                >
                  <v-text-field
                    v-model="mail"
                    label="Mail"
                    required
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    v-model="password"
                    label="Password"
                    required
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    v-model="password2"
                    label="Repeat password"
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
                  <error> {{error}} </error>
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
import { mapState, mapActions } from 'vuex';

export default {
  name: "Newuser",
  data() {
    return {
        mail: "",
        password: "",
        password2: ""
      
    }
  },
  computed: {
    ...mapState('userModule', ['error']),
    block() {
      if (!this.mail.includes("@")) {
        return true;
      }
      if (this.password.length > 5 && this.password === this.password2) {
        return false;
        }else{
        return true;
      }
    }
  },
  methods: {
      ...mapActions('userModule', ['getNewUser']),
    clean() {
      this.mail = "";
      this.password = "";
      this.password2 = "";
    },
    formProccess({mail: mail, password: password}){
        this.getNewUser({mail: mail, password: password})
        this.clean();
    }
  },
};
</script>
<style>
v-btn {
  width: 50px;
  height: 50px;
}
</style>