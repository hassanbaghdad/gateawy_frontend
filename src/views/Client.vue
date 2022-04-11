<template>
    <v-container>
        <v-card>
            <v-card-title class="info">
                <v-icon dark>mdi-cube-outline</v-icon>
                <h3 class="ml-2" style="color: white">Products</h3>
            </v-card-title>
            <v-divider/>
            <v-card-text>
                <v-row justify="center">
                    <v-col cols="12" md="3" v-for="p in pageOfItems" :key="'p_2_'+p.product_id">
                        <v-card max-width="300">
                            <v-card-text class="text-center">
                                <v-icon style="font-size: 150px">mdi-cube-outline</v-icon>
                            </v-card-text>
                            <v-card-subtitle>
                                <h3 class="text-center">{{p.product_title}}</h3>
                                <v-chip class="text-right" dark color="orange">
                                    ${{p.product_price}}
                                </v-chip>

                            </v-card-subtitle>

                            <v-divider/>
                            <v-card-actions>
                                <v-btn block class="primary" @click="set_product_to_view(p)">
                                    <v-icon>mdi-eye</v-icon>
                                    <span>View</span>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider/>
            <v-card elevation="1" class="f14 text-center pa-4">
                <jw-pagination :pageSize="8" :maxPages="$vuetify.breakpoint.xs?1:10"  :items="products" :labels="customLabels" :styles="customStyles" @changePage="onChangePage"></jw-pagination>
            </v-card>
        </v-card>
    <ViewProduct/>
    </v-container>
</template>

<script>
    import JwPagination from 'jw-vue-pagination';
    import ViewProduct from "@/components/Products/ViewProduct";
    const customLabels = {
        first: 'First',
        last: 'Last',
        previous: 'Previous',
        next: 'Next'
    };
    const customStyles = {
        ul: {
            direction:'ltr'
        },
        li: {
            display: 'inline-block',
            border:'1px solid grey',
            margin:'2px',
            borderRadius:'5px'
        },
        a: {
            color: 'black'
        }
    };
    export default {
        name: "Client",
        components: {
            JwPagination,
            ViewProduct
        },
        data(){
            return{
                products:this.$store.state.products.products,
                customLabels,
                customStyles,
                pageOfItems: [],
                search:{
                    product_title:'',
                    product_size:'',
                    product_price:'',
                    product_desc:'',
                }
            }
        },
        methods: {
            onChangePage(pageOfItems) {
                // update page of items
                this.pageOfItems = pageOfItems;
            },
            set_product_to_view(product)
            {
                this.$store.state.products.target = product;
                this.$store.state.products.forms.view_product = true;
            }
        },
        computed:{
            get_products:function () {
                return this.$store.state.products.products;
            }
        },
        watch:{
            get_products:function (new_products) {
                this.products = new_products;
            }
        },
        created(){
            this.$store.commit("GET_PRODUCTS");
        }
    }
</script>

<style scoped>

</style>