const cart = () => {
    let body = document.querySelector('body');
    let cart = [];

    const setProductIncart = (idProduct, quantity, position) => {
        if(quantity > 0){
            if(position < 0){
                cart.push({
                    product_id: idProduct,
                    quantity: quantity
                })
            }else{
                cart[position].quantity = quantity;
            }
        }
        refreshCartHTML();
    }
    const refreshCartHTML = () => {
        // let listHTML = document.querySelector('.ListCart');
        let totalHTML = document.querySelector('.icon-cart span');
        let totalQuantity = 0;
        cart.forEach(item => {
            totalQuantity = totalQuantity + item.quantity;
        })
        totalHTML.innerText = totalQuantity;
    }
    //click
    document.addEventListener('click', (event) => {
        let buttonClick = event.target;
        let idProduct = buttonClick.dataset.id;
        let position = cart.findIndex((value) => value.product_id == idProduct);
        let quantity = position < 0 ? 0 : cart[position].quantity;

        if (buttonClick.classList.contains('iconcart')){
            quantity++;
            setProductIncart(idProduct, quantity, position);
        }
})
}
export default cart;