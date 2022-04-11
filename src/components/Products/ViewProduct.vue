<template>
    <v-dialog v-model="$store.state.products.forms.view_product" max-width="500">
        <v-card>
            <v-card-title class="orange">
                <v-icon dark>mdi-cube-outline</v-icon>
                <h4 class="ml-2" style="color: white">{{product.product_title}}</h4>
                <v-spacer/>
                <v-btn icon @click="$store.state.products.forms.view_product=false"><v-icon color="white">mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-divider/>
            <v-card-text>
                <v-row justify="center">
                    <v-col cols="12" class="text-center">
                        <v-icon size="200">mdi-cube-outline</v-icon>
                    </v-col>
                    <v-col cols="12">
                        <h2> Size: {{product.product_size}}</h2>
                        <v-divider/>
                    </v-col>
                    <v-col cols="12">
                        <h2> Price: {{product.product_price}}</h2>
                        <v-divider/>
                    </v-col>
                    <v-col cols="12">
                        <h2> Description: {{product.product_desc}}</h2>
                        <v-divider/>
                    </v-col>


                </v-row>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
                <v-btn dark color="orange">Buy</v-btn>
                <v-btn outlined @click="$store.state.products.forms.view_product=false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "ViewProduct",
        data(){
            return{
                product:{
                    product_id:'',
                    product_title:'',
                    product_size:'',
                    product_price:'',
                    product_desc:'',
                }
            }
        },
        computed:{
            get_product_to_view:function () {
                return this.$store.state.products.forms.view_product
            }
        },
        watch:{
            get_product_to_view:function (new_product) {
                if(new_product)
                {
                    this.product = this.$store.state.products.target
                }
            }
        },
    }
</script>

<style scoped>

</style>