document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal'); // Elemento onde o subtotal será exibido
    
    function loadCartItems() {
        const cartItems = localStorage.getItem('cartContent');
        if (cartItems) {
            // Limpa o container antes de adicionar os itens
            cartItemsContainer.innerHTML = '';

            // Parseia o HTML dos itens do carrinho
            const parser = new DOMParser();
            const doc = parser.parseFromString(cartItems, 'text/html');
            const items = doc.getElementsByClassName('cart-box');

            // Adiciona os itens do carrinho ao container na página de pagamento
            for (let item of items) {
                cartItemsContainer.appendChild(item.cloneNode(true));
            }

            // Atualiza o subtotal na página de pagamento
            const subtotal = localStorage.getItem('cartTotal');
            subtotalElement.innerText = '$' + subtotal;
        } else {
            // Caso não haja itens no carrinho, exibir uma mensagem ou tomar outra ação necessária
            const emptyCartMessage = document.createElement('div');
            emptyCartMessage.textContent = 'Não há itens no carrinho.';
            cartItemsContainer.appendChild(emptyCartMessage);
        }
    }

    function preencherEndereco(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (!data.erro) {
                    document.getElementById('address').value = data.logradouro;
                    document.getElementById('state').value = data.uf;
                    document.getElementById('city').value = data.localidade;
                } else {
                    alert("CEP não encontrado!");
                }
            })
            .catch(error => {
                console.error('Erro ao buscar CEP:', error);
                alert("Erro ao buscar CEP!");
            });
    }

    document.getElementById('cep').addEventListener('blur', function() {
        const cep = this.value.replace(/\D/g, '');
        console.log('CEP digitado:', cep);
        if (cep.length === 8) {
            preencherEndereco(cep);
        } else {
            alert("CEP inválido!");
        }
    });

    loadCartItems(); // Chama a função para carregar os itens do carrinho quando a página é carregada
});
