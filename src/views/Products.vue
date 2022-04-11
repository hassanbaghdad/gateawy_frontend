<template>
    <v-container>
        <v-card class="mt-4">
            <v-card-title>
                <v-icon>mdi-cube-outline</v-icon>
                <span class="ml-2">Products</span>

            </v-card-title>
            <v-divider/>
            <v-card-title>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                @click="$store.state.products.forms.add_product=true"
                                v-bind="attrs"
                        v-on="on" fab small color="primary" dark>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>

                    </template>
                    <span>Add Product</span>
                </v-tooltip>

            </v-card-title>
            <v-divider/>
            <v-card-text>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-center">
                                ID
                            </th>
                            <th class="text-center">
                                Title
                            </th>
                            <th class="text-center">
                                Size
                            </th>
                            <th class="text-center">
                                Price
                            </th>
                            <th class="text-center">
                                Description
                            </th>

                            <th class="text-center">
                                Actions
                            </th>
                        </tr>
                        <tr>
                            <th class="text-center">

                            </th>
                            <th class="text-center">
                                <v-text-field @keyup="search_product" v-model="search.product_title" dense outlined prepend-inner-icon="mdi-magnify"></v-text-field>
                            </th>
                            <th class="text-center">
                                <v-text-field @keyup="search_product" v-model="search.product_size" dense outlined prepend-inner-icon="mdi-magnify"></v-text-field>
                            </th>
                            <th class="text-center">
                                <v-text-field @keyup="search_product" v-model="search.product_price" dense outlined prepend-inner-icon="mdi-magnify"></v-text-field>
                            </th>
                            <th class="text-center">
                                <v-text-field @keyup="search_product" v-model="search.product_desc" dense outlined prepend-inner-icon="mdi-magnify"></v-text-field>
                            </th>

                            <th class="text-center">

                            </th>
                        </tr>

                        </thead>
                        <tbody>
                        <tr v-for="p in pageOfItems" :key="'p1_'+p.product_id">
                            <td class="text-center">{{p.product_id}}</td>
                            <td class="text-center">{{p.product_title}}</td>
                            <td class="text-center">{{p.product_size}}</td>
                            <td class="text-center">{{p.product_price}}</td>
                            <td class="text-center">{{p.product_desc}}</td>
                            <td class="text-center">
                                <v-btn icon @click="set_product_to_edit(p)"><v-icon color="primary">mdi-pencil</v-icon></v-btn>
                                <v-btn icon @click="set_product_to_delete(p)"><v-icon color="error">mdi-delete</v-icon></v-btn>
                            </td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
            <v-divider/>
            <v-card elevation="1" class="f14 text-center pa-4">
                <jw-pagination :pageSize="10" :maxPages="$vuetify.breakpoint.xs?1:10"  :items="products" :labels="customLabels" :styles="customStyles" @changePage="onChangePage"></jw-pagination>
            </v-card>


        </v-card>
        <AddProduct/>
        <EditProduct/>
        <DeleteProduct/>
    </v-container>
</template>

<script>
    import JwPagination from 'jw-vue-pagination';
    import AddProduct from "@/components/Products/AddProduct";
    import EditProduct from "@/components/Products/EditProduct";
    import DeleteProduct from "@/components/Products/DeleteProduct";
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
        name: "Products",
        components:{
            JwPagination,
            AddProduct,
            EditProduct,
            DeleteProduct
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
        methods:{
            onChangePage(pageOfItems) {
                // update page of items
                this.pageOfItems = pageOfItems;
            },
            set_product_to_edit(product)
            {
                this.$store.state.products.target = product;
                this.$store.state.products.forms.edit_product = true;
            },
            set_product_to_delete(product)
            {
                this.$store.state.products.target = product;
                this.$store.state.products.forms.delete_product = true;
            },
            search_product()
            {
                var filtered = this.$store.state.products.products;

                filtered = filtered.map(x=>{
                    x.product_price = x.product_price.toString();
                    return x;
                });

                filtered = filtered.filter(item=>item.product_title.match(this.search.product_title));
                filtered = filtered.filter(item=>item.product_size.match(this.search.product_size));
                filtered = filtered.filter(item=>item.product_desc.match(this.search.product_desc));
                filtered = filtered.filter(item=>item.product_price.match(this.search.product_price));

                this.products = filtered;
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