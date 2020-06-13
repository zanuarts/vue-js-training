var app = new Vue({
    el:'#app',
    data:{
        product: "Socks",
        brand: "Vue Mastery",
        image: "./assets/vmSocks-green.png",
        selectedVariant: 0,
        details:["80% cotton", "20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId:2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.png",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.png",
                variantQuantity: 0
            }
        ],
        cart: 0
    },
    methods:{
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
        onSale(){
            return this.variants[this.selectedVariant].variantQuantity
        }  
    },
})