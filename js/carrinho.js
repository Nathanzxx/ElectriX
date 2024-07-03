//abrir e fechar carrinho
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// abrir carrinho
cartIcon.onclick = () =>{
    cart.classList.add("active")
};
// fechar carrinho
closeCart.onclick = () =>{
    cart.classList.remove("active")
};
