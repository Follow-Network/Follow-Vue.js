<template>
  <div id="app">
    <v-app>
      <AppHeader/>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader'

export default {
  components: {
   AppHeader
  }
}
</script>
