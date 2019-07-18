<template>
  <v-app id="inspire">
    <Toolbar/>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-flex text-xs-center>
              <v-fade-transition mode="out-in">
                <router-view/>
              </v-fade-transition>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
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