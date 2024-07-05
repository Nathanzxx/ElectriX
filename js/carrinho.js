

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento ao botão de adicionar ao carrinho
    var addCartButtons = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked);
    }

    function addCartClicked(event) {
        var button = event.target;
        var shopProducts = button.parentElement;
        var mainProductImage = document.getElementById('main-product-image');
        var productId = mainProductImage.getAttribute('data-id');
        var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
        var price = shopProducts.getElementsByClassName('product-price')[0].innerText;
        var productImg = mainProductImage.src;
        addProductToCart(productId, title, price, productImg);
        updatetotal();
        updateCartIcon();
    }

    function addProductToCart(productId, title, price, productImg) {
        var cartShopBox = document.createElement('div');
        cartShopBox.classList.add('cart-box');
        cartShopBox.setAttribute('data-id', productId);
        var cartItems = document.getElementsByClassName('cart-content')[0];
        var cartItemIds = cartItems.getElementsByClassName('cart-box');

        for (var i = 0; i < cartItemIds.length; i++) {
            if (cartItemIds[i].getAttribute('data-id') === productId) {
                alert('Você já adicionou esse item no carrinho.');
                return;
            }
        }

        var cartBoxContent = `
            <img src="${productImg}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <i class="fas fa-trash-alt cart-remove"></i>`;
        cartShopBox.innerHTML = cartBoxContent;
        cartItems.append(cartShopBox);

        cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
        cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);

        saveCartItems();
        updatetotal();
        updateCartIcon();
    }

    function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updatetotal();
        saveCartItems();
        updateCartIcon();
    }

    function quantityChanged(event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatetotal();
        saveCartItems();
        updateCartIcon();
    }

    function updatetotal() {
        var cartContent = document.getElementsByClassName('cart-content')[0];
        var cartBoxes = cartContent.getElementsByClassName('cart-box');
        var total = 0;
        for (var i = 0; i < cartBoxes.length; i++) {
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName('cart-price')[0];
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            var price = parseFloat(priceElement.innerText.replace(/[^\d.]/g, '')); // Remover caracteres não numéricos, exceto ponto decimal
            var quantity = parseInt(quantityElement.value); // Converter quantidade para número inteiro
            total += price * quantity;
        }
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
        localStorage.setItem('cartTotal', total);
        document.getElementById('subtotal').innerText = '$' + total;
    }

    function saveCartItems() {
        var cartContent = document.getElementsByClassName('cart-content')[0];
        localStorage.setItem('cartContent', cartContent.innerHTML);
    }

    function loadCartItems() {
        var cartContent = document.getElementsByClassName('cart-content')[0];
        var savedContent = localStorage.getItem('cartContent');
        if (savedContent) {
            cartContent.innerHTML = savedContent;

            var removeCartButtons = cartContent.getElementsByClassName('cart-remove');
            for (var i = 0; i < removeCartButtons.length; i++) {
                var button = removeCartButtons[i];
                button.addEventListener('click', removeCartItem);
            }

            var quantityInputs = cartContent.getElementsByClassName('cart-quantity');
            for (var i = 0; i < quantityInputs.length; i++) {
                var input = quantityInputs[i];
                input.addEventListener('change', quantityChanged);
            }

            updatetotal();
            updateCartIcon();
        }
    }

    loadCartItems();
});

function updateCartIcon() {
    var cartBoxes = document.getElementsByClassName('cart-box');
    var quantity = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        quantity += parseInt(quantityElement.value);
    }
    var cartIcon = document.querySelector("#cart-icon");
    var cartQuantityElement = cartIcon.querySelector('.cart-quantity-badge');
    if (!cartQuantityElement) {
        cartQuantityElement = document.createElement('span');
        cartQuantityElement.classList.add('cart-quantity-badge');
        cartIcon.appendChild(cartQuantityElement);
    }
    cartQuantityElement.innerText = quantity;
}

function redirecionarParaPagamento() {
    var cartItems = localStorage.getItem('cartContent');
    sessionStorage.setItem('cartItems', cartItems);
    window.location.href = 'pagamento.html';
}
