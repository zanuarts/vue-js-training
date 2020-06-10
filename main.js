var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2F1578366170160_4.png?alt=media&token=e0829829-627b-44e1-9d96-fa22eaca1ac9",
        altText: "A pair of socks",
        inStock: false,
        inventory: 100,
        details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor:"green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})