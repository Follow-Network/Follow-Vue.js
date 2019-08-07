<template>
   <nav>
       <v-toolbar class="primary">
            <v-toolbar-title class="text-uppercase white--text">
                Follow
            </v-toolbar-title>
           <v-spacer></v-spacer>
           <button type="button" class="v-btn v-btn--flat v-btn--text theme--light v-size--small primary--text">
               <span class="v-btn__content">Primary</span>
           </button>
           <v-btn class="v-btn v-btn--flat v-btn--text theme--light v-size--small">
               <span class="v-btn__content">Sign In</span>
           </v-btn>
       </v-toolbar>
   </nav>
</template>

<script>
    export default {
        computed: {
            menuItems() {
                return [
                    {
                        icon: 'exit_to_app',
                        title: 'Sign Up',
                        route: '/login',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
