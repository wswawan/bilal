<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to AdBy
        </h1>
        <p class="subheading font-weight-regular">
         Please wait for 1 x 24 hours, after your account reviewed by the HR division. </br>You will receive a confirmation email!
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    data: () => ({
      
    }),
    computed:{
      ...mapState('authentication', [
        'successMsg'
      ])

    },
    getters:{

    },
    methods:{

    }
  }
</script>

<style>

</style>
