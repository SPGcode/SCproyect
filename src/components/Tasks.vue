<template>
    <div>
       <v-container>
           <v-row class="d-flex justify-space-between" >
               <v-col xs="12" sm="6" v-for="(item, index) in allPosts" :key="index">
                    <v-card
                        elevation="5"
                    >
                       <v-img src="../assets/postimg.jpg"></v-img>
                       <v-card-title>
                           <span> {{item.title}} </span>
                       </v-card-title>
                       <v-card-text>
                        <p> {{item.text}} </p>
                       </v-card-text>
                       <v-card-actions>
                           <v-row class="d-flex text-center mx-3">
                               <v-col cols="6">
                                  <v-btn block class="green accent-2">Hola</v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn block class="green accent-2">Adiós</v-btn> 
                                </v-col>
                           </v-row>
                       </v-card-actions>
                   </v-card>
               </v-col>
           </v-row>
       </v-container>
    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
    name: "Tasks",
    data() {
        return {
        }
    },
    created(){
        this.getPosts()
    },
    computed:{
        ...mapState('postModule',['allPosts']),
    },
    methods: {
      ...mapActions('postModule',['getPosts']),
    },
}
</script>