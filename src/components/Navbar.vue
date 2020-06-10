<template>
  <v-container id="inspire">

    <v-app-bar
      app
      dark
    >
      <v-toolbar-title>
          <span  class = "font-weight-light home" @click="navigateTo('/')">JWT AUTH TEST</span>
      </v-toolbar-title>
    </v-app-bar>

    
  </v-container>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
      source: String,
    },
    methods:{
      navigateTo(route){
        this.$router.push(route)
      }
    },
}
</script>

<style scoped>
  .home{
    cursor : pointer;
  }
  .space{
    padding: 1.5rem;
  }
  
</style>