<template>
  <!-- App.vue -->

  <v-app>
      <Drawer/>


      <AppBar/>


    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from "@/components/Drawer";
import AppBar from "@/components/AppBar";
export default {
  name: 'App',
  components:{
    Drawer,
    AppBar
  },
  data: () => ({
    //
  }),
};
</script>
