const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
                this.cart += 1
        },
        updateImage(variantImage) {
<<<<<<< HEAD
            this.image = variantImage
        },
        updateStock(variantQuantity){
            if(variantQuantity > 0){
                this.inStock = true;
            }
            else {
                this.inStock = false;
            }
        },
        updateVariant(variant) {
            this.updateImage(variant.image);
            this.updateStock(variant.quantity);
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
=======
            this.image = variantImage;
>>>>>>> master
        }
    }
})
