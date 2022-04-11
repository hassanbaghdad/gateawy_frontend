<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-card max-width="400" class="ma-auto" to="/dashboard/products">
            <v-card-text class="text-center">
              <v-icon style="font-size: 100px" color="error" x-large>mdi-lock</v-icon>
              <v-spacer/>
              <v-btn color="error" dark>
                Dashboard
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card max-width="400" class="ma-auto" to="/client/products">
            <v-card-text class="text-center">
              <v-icon style="font-size: 100px" x-large color="primary">mdi-account</v-icon>
              <v-spacer/>
              <v-btn color="primary" dark>
                Client
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card max-width="400" class="ma-auto" href="https://github.com/hassanbaghdad/gateawy_frontend.git">
            <v-card-text class="text-center">
              <v-icon style="font-size: 100px" x-large color="primary">mdi-github</v-icon>
              <v-spacer/>
              <v-btn color="primary" dark>
                 Source Code Frontend Vue.JS
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card max-width="400" class="ma-auto" href="https://github.com/hassanbaghdad/gateawy_backend.git">
            <v-card-text class="text-center">
              <v-icon style="font-size: 100px" x-large color="primary">mdi-github</v-icon>
              <v-spacer/>
              <v-btn color="primary" dark>
                 Source Code Backend Laravel 9
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  }
}
</script>
