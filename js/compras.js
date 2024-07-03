function changeImage(imageUrl) {
    document.getElementById('main-product-image').src = imageUrl;
    const thumbnails = document.querySelectorAll('.product-thumbnails img');
    thumbnails.forEach(thumbnail => {
        if (thumbnail.src.includes(imageUrl)) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
    const colorOptions = document.querySelectorAll('.color-options span');
    colorOptions.forEach(option => {
        if (option.onclick.toString().includes(imageUrl)) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}
const productsData = [
    {
        id: 1,
        name: "Somnium pro",
        images: [
            "../img/fone1.png",
            "../img/fone3.png",
            "../img/fone4.png",
            "../img/fone5.png"
        ],
        price: 169.99,
        oldPrice: 180.00,
        reviews: {
            averageRating: 4.3,
            reviewCount: 162
        },
        description: "Descrição do produto aqui...",
        fabricCare: "Material: Soft wool blend<br>Color: Various",
        salePerformance: {
            sales: 0,
            reviewCount: "-",
            reviewAverage: "-"
        },
        keywords: ["# men's fashion", "# men's hat", "# colorful accessory", "# warm headwear"]
    },
    // Outros produtos aqui
];

// Função para atualizar os detalhes do produto com base no ID
function changeProductDetails(id) {
    const product = productsData.find(item => item.id === id);

    // Atualiza as imagens do produto
    const thumbnails = document.querySelector('.product-thumbnails');
    thumbnails.innerHTML = '';
    product.images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Thumbnail ${index + 1}`;
        img.onclick = function() {
            changeImage(image);
        };
        thumbnails.appendChild(img);
    });

    // Atualiza a imagem principal
    document.getElementById('main-product-image').src = product.images[0];

    // Atualiza o nome do produto
    document.querySelector('.product-purchase h4').textContent = product.name;

    // Atualiza o preço
    document.querySelector('.product-price').innerHTML = `${product.price} <span class="old-price">${product.oldPrice}</span>`;

    // Atualiza as avaliações
    document.querySelector('.rating span').textContent = `${product.reviews.averageRating} - ${product.reviews.reviewCount} reviews`;

    // Atualiza a descrição e outras informações do produto
    document.querySelector('.product-details h2').textContent = product.name;
    document.querySelector('.product-details p').textContent = product.description;
    document.querySelector('.product-details .fabric-care').innerHTML = `<h3>Fabric + Care</h3><p>${product.fabricCare}</p>`;
    document.querySelector('.product-details .sale-performance').innerHTML = `<h3>Sale performance</h3><p>Sales: ${product.salePerformance.sales}<br>Review Count: ${product.salePerformance.reviewCount}<br>Review Average: ${product.salePerformance.reviewAverage}</p>`;
    document.querySelector('.product-details .keywords').innerHTML = product.keywords.map(keyword => `<span>${keyword}</span>`).join('');

    // Scrolla para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para mudar a imagem principal ao clicar nas miniaturas
function changeImage(imageUrl) {
    document.getElementById('main-product-image').src = imageUrl;
}