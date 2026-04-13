function cartScope(){
    const products = [
        {id: 1, name: "Camisa", price: 50, stock: 10},
        {id: 2, name: "Tênis", price: 200, stock: 10},
        {id: 3, name: "Boné", price: 30, stock: 20}
    ];

    const cart = [];

    function addToCart(productId, quantity){
        const product = products.find(p => p.id === productId);

        if (!product) {
            console.log("Product not found");
            return;
        };
        if(quantity > product.stock){
            return console.log('Out of stock');
        };

        const itemInCart = cart.find(p => p.productid === productId);

        if(itemInCart){
            itemInCart.quantity += quantity;
            return;
        }

        cart.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }

    return {
        addToCart
    }
}

const cartSystem = cartScope();

cartSystem.addToCart(1, 10);
