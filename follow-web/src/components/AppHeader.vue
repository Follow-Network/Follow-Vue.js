<template>
    <v-app>
        <v-toolbar app dark class="primary">
            <v-toolbar-title v-text="'Follow'"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn color>Button</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-app>
</template>

<script>
    export default {
        computed: {
            menuItems() {
                return [
                    {
                        icon: 'visibility',
                        title: 'Sign Up',
                        route: '/login'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
