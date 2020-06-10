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
              <v-toolbar-title><span class="font-weight-light" >Login</span></v-toolbar-title>
              
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Email"
                  name="email"
                  prepend-icon="mdi-email"
                  type="text"
                  color="grey"
                  v-model="email"
                  :rules="rules"
                ></v-text-field>
                <v-text-field
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="text"
                  color="grey"
                  v-model="password"
                  :rules="rules"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>

            <v-row justify="center">  <v-btn color="grey" @click="login()"><span class="font-weight-light">Login</span></v-btn></v-row>
            </v-card-actions>
          </v-card>
          {{error}}
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
  // import router from '../router/index'
  
  export default {
    name: 'Login',
    data: ()=>({
        email : '',
        password: '',
        error: '',
        rules: [
        value => !!value || 'Required.',
        value => (value || '').length >= 5 || 'Min 5 characters',
        
      ],
    }),
    components: {
      Footer,
      Navbar
    },
    methods:{
      login(){
        let user = {
          email: this.email,
          password: this.password
        }
        axios.post('http://localhost:5000/login',user).then(
          res=>{
            if(res.status == 200){
              console.log(res)
              localStorage.setItem('token', res.data.token)
              this.error = "login successful and token saved"
              this.$router.push('/user')
            }      
          }),
          err=>{
            console.log(err)
            this.error = err.response.data.error
          }
      }
    }
  }
</script>
