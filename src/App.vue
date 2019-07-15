<template>
  <v-app>
    <Toolbar/>
    <v-layout text-xs-center align-center>
      <v-content class="px-3">
          <router-view/>
      </v-content>
    </v-layout>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar
  },
  data(){
    return{
    }
  }
}
</script>