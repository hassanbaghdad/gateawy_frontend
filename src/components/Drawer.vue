<template>
        <v-navigation-drawer app v-model="$store.state.drawer">
            <v-list-item to="/">
                <v-list-item-content>
                    <v-list-item-title class="text-h6" >
                        Gateway
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Fullstack Developer
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                    dense
                    nav
            >
                <v-list-item link to="/dashboard/products">
                    <v-list-item-icon>
                        <v-icon>mdi-lock</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider/>
                <v-list-item link to="/client/products">
                    <v-list-item-icon>
                        <v-icon>mdi-cube-outline</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Client</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Drawer",
        data () {
            return {
                items: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                    { title: 'Photos', icon: 'mdi-image' },
                    { title: 'About', icon: 'mdi-help-box' },
                ],
                right: null,
            }
        },
    }
</script>

<style scoped>

</style>