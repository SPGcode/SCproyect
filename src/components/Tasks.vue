<template>
    <div>
       <v-container>
           <v-row class="d-flex justify-space-between" >
               <v-col xs="12" sm="6" v-for="(item, index) in task" :key="index">
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
                                  <v-btn block class="lime darken-1">Hola</v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn block class="lime darken-1">Adiós</v-btn> 
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
export default {
    name: "Tasks",
    data() {
        return {
            task:[
                {
                    img:"../assets/postimg.jpg",
                    title:"Lorem, ipsum dolor.",
                    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores corrupti nihil asperiores?"

                },
                {
                    img:"../assets/postimg.jpg",
                    title:"Lorem, ipsum dolor.",
                    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores corrupti nihil asperiores?"

                },
                {
                    img:"../assets/postimg.jpg",
                    title:"Lorem, ipsum dolor.",
                    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores corrupti nihil asperiores?"

                },
                {
                    img:"../assets/postimg.jpg",
                    title:"Lorem, ipsum dolor.",
                    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores corrupti nihil asperiores?"

                },
                
            ]
        }
    },
}
</script>