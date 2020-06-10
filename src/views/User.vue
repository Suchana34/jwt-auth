<template>
<div>
  <Navbar />
  <v-app id="inspire">
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12" shaped>
            <v-toolbar
              color="grey"
              flat
            >
              <v-toolbar-title><span class="font-weight-light" >User Profile</span></v-toolbar-title>
              
            </v-toolbar>
            <v-card-title>
              Hello {{name}} !
            </v-card-title>
            <v-card-subtitle>
                
              Your email is {{email}}
            </v-card-subtitle>
            <v-card-actions>

            <v-row justify="center">  <v-btn color="grey" @click="logout()"><span class="font-weight-light">Logout</span></v-btn></v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  <Footer />
  </div>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    import Navbar from '@/components/Navbar.vue'
    import axios from 'axios'

    export default{

        name: 'User',
        data : ()=>({
            name:'',
            email: ''
        }),
        components:{
            Navbar,
            Footer
        },
        created() {
          //user is not authorized
          if (localStorage.getItem('token') === null) {
            this.$router.push('/login');
          }
        },
        mounted() {
          axios.get('http://localhost:5000/user', { headers: { token: localStorage.getItem('token')}})
            .then(res => {
              this.name = res.data.user.name;
              this.email = res.data.user.email;
            })
        },
        methods: {
          logout() {
            localStorage.clear();
            this.$router.push('/login');
          }
        }
    }

</script>