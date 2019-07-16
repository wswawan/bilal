<template>
  <v-app>
    <Toolbar/>
    <v-layout text-xs-center align-center>
      <v-content class="px-3">
        <v-fade-transition mode="out-in">
          <router-view/>
        </v-fade-transition>
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