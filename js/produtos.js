const cardsData = [
    {
        imgSrc: "../img/mouse1.png",
        altText: "Mouse Corsair M65",
        price: "61.98",
        currency: "€",
        link: "compra1.html",
        category: "Mouse"
    },
    {
        id: 2,
        imgSrc: "../img/mouse2.png",
        altText: "Mouse Gamer RGB",
        price: "79.99",
        currency: "€",
        link: "#",
        category: "Mouse"
    },
    {
        imgSrc: "../img/mouse4.png",
        altText: "Mouse Gamer RGB",
        price: "79.99",
        currency: "€",
        link: "#",
        category: "Mouse"
    },
    {
        imgSrc: "../img/mouse5.png",
        altText: "Mouse Gamer RGB",
        price: "79.99",
        currency: "€",
        link: "#",
        category: "Mouse"
    },
    {
        imgSrc: "../img/mouse3.png",
        altText: "Mouse Logitech G Pro",
        price: "89.99",
        currency: "€",
        link: "#",
        category: "Mouse"
    },
    // mouses //
    {
        imgSrc: "../img/teclado1.png",
        altText: "Teclado Logitech G Pro",
        price: "89.99",
        currency: "€",
        link: "compra2.html",
        category: "Teclado"
    },
    {
        imgSrc: "../img/teclado2.png",
        altText: "Teclado Logitech G Pro",
        price: "89.99",
        currency: "€",
        link: "#",
        category: "Teclado"
    },
    {
        imgSrc: "../img/teclado3.png",
        altText: "Teclado Logitech G Pro",
        price: "89.99",
        currency: "€",
        link: "#",
        category: "Teclado"
    },
    {
        imgSrc: "../img/teclado4.png",
        altText: "Teclado Logitech G Pro",
        price: "89.99",
        currency: "€",
        link: "#",
        category: "Teclado"
    },
    {
        imgSrc: "../img/teclado5.png",
        altText: "Teclado Logitech G Pro",
        price: "89.99",
        currency: "€",
        link: "#",
        category: "Teclado"
    },
    // teclados //
    {
        imgSrc: "../img/fone1.png",
        altText: "Headset HyperX Cloud II",
        price: "99.95",
        currency: "€",
        link: "#",
        category: "Headset"
    },
    {
        imgSrc: "../img/fone3.png",
        altText: "Headset HyperX Cloud II",
        price: "99.95",
        currency: "€",
        link: "#",
        category: "Headset"
    },
    {
        imgSrc: "../img/fone12.png",
        altText: "Headset HyperX Cloud II",
        price: "99.95",
        currency: "€",
        link: "#",
        category: "Headset"
    },
    {
        imgSrc: "../img/fone5.png",
        altText: "Headset HyperX Cloud II",
        price: "99.95",
        currency: "€",
        link: "#",
        category: "Headset"
    },
    {
        imgSrc: "../img/produto3.png",
        altText: "Headset HyperX Cloud II",
        price: "99.95",
        currency: "€",
        link: "#",
        category: "Headset"
    },
    // headsets //
];

function createCard(card, containerId) {
    const container = document.getElementById(containerId);

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
        <div class="imgBox">
            <img src="${card.imgSrc}" alt="${card.altText}" class="mouse">
        </div>
        <div class="contentBox">
            <h3>${card.altText}</h3>
            <h2 class="price">${card.price}<small>${card.currency}</small></h2>
            <a href="${card.link}" class="buy">Comprar agora</a>
        </div>
    `;

    container.appendChild(cardElement);
}

cardsData.forEach(card => {
    switch (card.category) {
        case 'Mouse':
            createCard(card, 'mouseContainer');
            break;
        case 'Teclado':
            createCard(card, 'tecladoContainer');
            break;
        case 'Headset':
            createCard(card, 'headsetContainer');
            break;
        case 'Microfone':
            createCard(card, 'microfoneContainer');
            break;
        default:
            // Handle unknown category or add a default behavior
            break;
    }
});

document.getElementById('arrow-right-mouse').addEventListener('click', function(event) {
    event.preventDefault();
    scrollCards('mouseContainer');
  });
  
  document.getElementById('arrow-right-teclados').addEventListener('click', function(event) {
    event.preventDefault();
    scrollCards('tecladoContainer');
  });
  
  document.getElementById('arrow-right-headset').addEventListener('click', function(event) {
    event.preventDefault();
    scrollCards('headsetContainer');
  });
  
  function scrollCards(containerId) {
    const cardContainer = document.getElementById(containerId);
    const cardWidth = cardContainer.querySelector('.card').offsetWidth;
    const scrollAmount = cardWidth + 20; // 20px é a margem do card (ajuste conforme necessário)
    
    cardContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }