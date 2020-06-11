Vue.component('product',{
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    template:`
        <div class="product">
            <div class="product-image">
                <img :src="image" >
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
                <p>Shipping: {{shipping}}</p>
                <p>User is premium: {{ premium }}</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                
                
                
                <div class="color-box" 
                    v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    :style="{backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)">
                </div>

                <button v-on:click="addToCart" 
                        :disabled="!inStock"
                        :class="{disabledButton: !inStock}">
                        Add to cart
                </button>
                <div class="cart">
                    <p>Cart ({{cart}})</p>
                </div>
            </div>
        </div>
    `,
    data(){
        return{
            product: "Socks",
            brand: 'Vue Mastery',
            selectedVariant: 0,
            inStock: true,
            details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor:"green",
                    variantImage:"./assets/vmSocks-green.png",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage:"./assets/vmSocks-blue.png",
                    variantQuantity: 0
                }
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        },

    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping(){
            if (this.premium){
                return "Free"
            }
            else{
                return 2.99
            }
        }
    }
})
var app = new Vue({
    el: '#app',
    data:{
        premium: true
    }   
})