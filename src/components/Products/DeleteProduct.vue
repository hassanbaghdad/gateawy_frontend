<template>
    <v-container>
        <v-dialog

                max-width="500"
                v-model="$store.state.products.forms.delete_product"
        >
          <v-form lazy-validation ref="form" v-model="valid">
              <v-card>
                  <v-card-title class="error">
                      <span style="color: white">Delete Product</span>
                      <v-spacer/>
                      <v-btn @click="$store.state.products.forms.delete_product=false" icon><v-icon color="white">mdi-close</v-icon></v-btn>
                  </v-card-title>
                  <v-divider/>
                  <v-card-text class="pa-4">
                      <v-row justify="center">
                          <v-col cols="12">
                              <h3>Do you want delete {{product.product_title}} ?</h3>
                          </v-col>


                      </v-row>

                  </v-card-text>
                  <v-divider/>
                  <v-card-actions>
                      <v-btn :loading="loading" @click="delete_product" class="error">
                          <v-icon>mdi-delete</v-icon>
                          <span>Delete</span>
                      </v-btn>
                      <v-btn outlined @click="$store.state.products.forms.delete_product=false" class=" ml-4">
                          <v-icon>mdi-close</v-icon>
                          <span>Close</span>
                      </v-btn>

                  </v-card-actions>
              </v-card>
          </v-form>
        </v-dialog>
    </v-container>
</template>

<script>
    export default {
        name: "DeleteProduct",
        data(){
            return{
                loading:false,
                valid:true,
                product:{
                    product_id:'',
                    product_title:'',
                    product_size:'',
                    product_price:'',
                    product_desc:'',
                }
            }
        },
        methods:{
            async delete_product()
            {
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    this.$axios.post('admin/delete-product',this.product).then(res=>{
                        this.$fire({
                            title: "Success",
                            text: res.data.msg,
                            type: "success",
                            timer: 2000
                        });
                        this.$store.commit("GET_PRODUCTS");
                        this.$store.state.products.forms.delete_product = false;
                    }).catch(err=>{
                        console.log(err)
                    }).finally(fin=>{
                        this.loading = false;
                    })
                }

            },


        },
        computed:{
            get_product_to_delete:function () {
                return this.$store.state.products.forms.delete_product
            }
        },
        watch:{
            get_product_to_delete:function (new_product) {
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