// //abrir e fechar carrinho
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

document.addEventListener('DOMContentLoaded', function() {

    // Adicionar evento ao botão de adicionar ao carrinho
    var addCartButtons = document.getElementsByClassName('add-cart'); // Seleciona todos os botões de adicionar ao carrinho
    console.log("Botões de adicionar ao carrinho encontrados:", addCartButtons.length);
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked); // Adiciona um listener ao botão para chamar a função addCartClicked quando clicado
    }

    // Função para adicionar produto ao carrinho
    function addCartClicked(event) {
        var button = event.target; // Identifica o botão clicado
        var shopProducts = button.parentElement; // Seleciona o elemento pai do botão (container do produto)
        var title = shopProducts.getElementsByClassName('product-title')[0].innerText; // Obtém o título do produto
        var price = shopProducts.getElementsByClassName('product-price')[0].innerText; // Obtém o preço do produto
        var productImg = document.getElementById('main-product-image').src; // Obtém a imagem do produto
        addProductToCart(title, price, productImg); // Chama a função para adicionar o produto ao carrinho
        updatetotal(); // Atualiza o total do carrinho
    }

    // Função para adicionar produto ao carrinho
    function addProductToCart(title, price, productImg) {
        var cartShopBox = document.createElement('div'); // Cria um novo elemento div para o item do carrinho
        cartShopBox.classList.add('cart-box'); // Adiciona a classe 'cart-box' ao novo elemento
        var cartItems = document.getElementsByClassName('cart-content')[0]; // Seleciona o container do carrinho
        var cartItemNames = cartItems.getElementsByClassName('cart-product-title'); // Seleciona todos os títulos dos produtos no carrinho
        
        // Verifica se o produto já está no carrinho
        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText === title) {
                alert('Você já adicionou esse item no carrinho.');
                return; // Se o produto já estiver no carrinho, exibe um alerta e retorna
            }
        }

        // Conteúdo do item do carrinho
        var cartBoxContent = `
            <img src="${productImg}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <i class="fas fa-trash-alt cart-remove"></i>`;
        cartShopBox.innerHTML = cartBoxContent; // Adiciona o conteúdo ao novo elemento
        cartItems.append(cartShopBox); // Adiciona o novo elemento ao container do carrinho
        
        // Adiciona eventos aos botões de remover e aos inputs de quantidade
        cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
        cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);

        saveCartItems(); // Salva o estado do carrinho
    }

    // Função para remover item do carrinho
    function removeCartItem(event) {
        var buttonClicked = event.target; // Identifica o botão clicado
        buttonClicked.parentElement.remove(); // Remove o item do carrinho
        updatetotal(); // Atualiza o total do carrinho
        saveCartItems(); // Salva o estado do carrinho
    }

    // Função para atualizar a quantidade de itens
    function quantityChanged(event) {
        var input = event.target; // Identifica o input de quantidade
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1; // Se o valor não for válido, define como 1
        }
        updatetotal(); // Atualiza o total do carrinho
        saveCartItems(); // Salva o estado do carrinho
    }
    

    // Função para atualizar o total do carrinho
    function updatetotal() {
        var cartContent = document.getElementsByClassName('cart-content')[0]; // Seleciona o container do carrinho
        var cartBoxes = cartContent.getElementsByClassName('cart-box'); // Seleciona todos os itens do carrinho
        var total = 0; // Inicializa o total
        for (var i = 0; i < cartBoxes.length; i++) {
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName('cart-price')[0]; // Seleciona o elemento de preço do item
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]; // Seleciona o input de quantidade do item
            var price = parseFloat(priceElement.innerText.replace('$', '')); // Obtém o preço do item
            var quantity = quantityElement.value; // Obtém a quantidade
            total += price * quantity; // Calcula o total
        }
        total = Math.round(total * 100) / 100; // Arredonda o total
        document.getElementsByClassName('total-price')[0].innerText = '$' + total; // Atualiza o total na página
        localStorage.setItem('cartTotal', total); // Salva o total no localStorage
    }

    // Função para salvar os itens do carrinho no localStorage
    function saveCartItems() {
        var cartContent = document.getElementsByClassName('cart-content')[0]; // Seleciona o container do carrinho
        localStorage.setItem('cartContent', cartContent.innerHTML); // Salva o conteúdo do carrinho no localStorage
    }

    // Função para carregar os itens do carrinho do localStorage
    function loadCartItems() {
        var cartContent = document.getElementsByClassName('cart-content')[0]; // Seleciona o container do carrinho
        cartContent.innerHTML = localStorage.getItem('cartContent'); // Carrega o conteúdo do carrinho do localStorage
        
        // Adiciona eventos aos botões de remover e aos inputs de quantidade
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

        updatetotal(); // Atualiza o total do carrinho
    }

    loadCartItems(); // Carrega os itens do carrinho quando a página é carregada
});
