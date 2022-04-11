<template>
        <v-app-bar app>
        <v-app-bar-nav-icon @click="$store.state.drawer=!$store.state.drawer"><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon>
        <v-toolbar-title>TEST</v-toolbar-title>
        <v-spacer/>
        <div class="text-center">
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            outlined
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-icon>mdi-account</v-icon>Account
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item disabled>
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item>
                    <v-list-item disabled>
                        <v-list-item-title>Edit Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item disabled>
                        <v-divider/>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>



                </v-list>
            </v-menu>
        </div>
        </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar",

    }
</script>

<style scoped>

</style>