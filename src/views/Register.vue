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
              <v-toolbar-title><span class="font-weight-light" >Register</span></v-toolbar-title>
              
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Username"
                  name="name"
                  prepend-icon="mdi-account"
                  type="text"
                  color="grey"
                  v-model="name"
                  :rules="rules"
                ></v-text-field>
                
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

            <v-row justify="center">  <v-btn color="grey" @click="signin()"><span class="font-weight-light">Turn In</span></v-btn></v-row>
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
import axios from 'axios';
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Register',
  components:{
    Navbar,
    Footer
  },
  data: () => ({
    name : '',
    password: '',
    email: '',
    error: '',
    rules: [
    value => !!value || 'Required.',
    value => (value || '').length >= 5 || 'Min 5 characters',
    ],
  }),

  methods:{
    signin(){
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      console.log(user)
      axios.post('http://localhost:5000/', user).then(
        res =>{
          console.log(res)
          this.error = ''
          this.$router.push('/login')
        },
        err =>{
          console.log(err.response)
          this.error = err.response.data.error
        })
    }
  }
}
</script>