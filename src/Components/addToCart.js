const cart = [];
const addToCart = (products)=>{
    if (cart.length===0){
        cart.push(products)
    }
    else {
    for (let index = 0; index < cart.length; index++){
        const element = cart[index];
        console.log(element.id);
        if (element.id === products.id) {
          //  element?.quantity+=1;
        console.log(1);
        } else {
        console.log(2);
        }

        }
    }
}
const products ={
    id:1, 
    quantity:1, 
    Price:100, 
    title:'rice'
    } 

//console.log(product);
 console.log(addToCart(products));

 console.log(cart);