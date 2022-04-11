<template>
    <v-container>
        <v-dialog

                max-width="500"
                v-model="$store.state.products.forms.edit_product"
        >
          <v-form lazy-validation ref="form" v-model="valid">
              <v-card>
                  <v-card-title>
                      Edit Product
                      <v-spacer/>
                      <v-btn @click="$store.state.products.forms.edit_product=false" icon><v-icon>mdi-close</v-icon></v-btn>
                  </v-card-title>
                  <v-divider/>
                  <v-card-text class="pa-4">
                      <v-row justify="center">
                          <v-col cols="12">
                              <v-text-field :rules="req" v-model="product.product_title" outlined label="Title" prepend-inner-icon="mdi-label"/>
                          </v-col>
                          <v-col cols="12">
                              <v-text-field :rules="req" v-model="product.product_size" outlined label="Size" prepend-inner-icon="mdi-move-resize-variant"/>
                          </v-col>
                          <v-col cols="12">
                              <v-text-field :rules="req_no" v-model="product.product_price" outlined label="Price" prepend-inner-icon="mdi-currency-usd"/>
                          </v-col>
                          <v-col cols="12">
                              <v-textarea :rules="req" v-model="product.product_desc" outlined label="Description" prepend-inner-icon="mdi-information"/>
                          </v-col>

                      </v-row>

                  </v-card-text>
                  <v-divider/>
                  <v-card-actions>
                      <v-btn :loading="loading" @click="edit_product" class="primary">
                          <v-icon>mdi-content-save</v-icon>
                          <span>Save</span>
                      </v-btn>
                      <v-btn color="error" @click="$store.state.products.forms.edit_product=false" class=" ml-4">
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
        name: "EditProduct",
        data(){
            return{
                loading:false,
                valid:true,
                req:[v=>!!v || 'Filed Required'],
                req_no:[v=>!!v&&Number(v)   || 'Filed required as number'],
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
            async edit_product()
            {
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    this.$axios.post('admin/edit-product',this.product).then(res=>{
                        this.$fire({
                            title: "Success",
                            text: res.data.msg,
                            type: "success",
                            timer: 2000
                        });
                        this.$store.commit("GET_PRODUCTS");
                        this.$store.state.products.forms.edit_product = false;
                    }).catch(err=>{
                        console.log(err)
                    }).finally(fin=>{
                        this.loading = false;
                    })
                }

            },


        },
        computed:{
            get_product_to_edit:function () {
                return this.$store.state.products.forms.edit_product
            }
        },
        watch:{
            get_product_to_edit:function (new_product) {
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