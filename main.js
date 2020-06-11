var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Vue Mastery',
        image: "./assets/vmSocks-green.png",
        altText: "A pair of socks",
        inStock: false,
        inventory: 100,
        details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor:"green",
                variantImage:"./assets/vmSocks-green.png",
                variantQuantity: 10,
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage:"./assets/vmSocks-blue.png",
                variantQuantity: 0
            }
        ],
        cart: 0,
        selectedVariant: 0,
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        },
        image(){
            return this.variants[this.selectedVariant].variantImage,
        },
        
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        }
    }
})