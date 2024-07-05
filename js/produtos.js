const cardsData = [
    {
        imgSrc: "../img/mouse1.png",
        altText: "Delux ",
        price: "R$ 149,99",
        currency: "",
        link: "compraMouse1.html",
        category: "Mouse"
    },
    {
        id: 2,
        imgSrc: "../img/mouserosa2.png",
        altText: "Delux Pro",
        price: "R$ 170,99",
        currency: "",
        link: "compraMouse2.html",
        category: "Mouse"
    },
    {
        imgSrc: "../img/mouse3.png",
        altText: "VXE R1",
        price: "R$ 132,90",
        currency: "",
        link: "compraMouse3.html",
        category: "Mouse"
    },
    {
        imgSrc: "../img/mouseamarelo2.png",
        altText: "VXE R1 Pro",
        price: "R$ 186,99",
        currency: "",
        link: "compraMouse4.html",
        category: "Mouse"
    },
    {
        imgSrc: "../img/mouseroxo3.png",
        altText: "G pro",
        price: "R$ 250,99",
        currency: "",
        link: "compraMouse5.html",
        category: "Mouse"
    },
    // mouses //
    {
        imgSrc: "../img/teclado1.png",
        altText: "Maxfit 67",
        price: "R$ 200,90",
        currency: "",
        link: "compraTeclado1.html",
        category: "Teclado"
    },
    {
        imgSrc: "../img/tecladopequeno1.png",
        altText: "Maxfit 67 Pro",
        price: "R$ 250,99",
        currency: "",
        link: "compraTeclado2.html",
        category: "Teclado"
    },
    {
        imgSrc: "../img/tecladopreto1.png",
        altText: "Sionyx V1",
        price: "R$ 90,99",
        currency: "",
        link: "compraTeclado3.html",
        category: "Teclado"
    },
    {
        imgSrc: "../img/teclado4.png",
        altText: "Sionyx V2",
        price: "R$ 120,99",
        currency: "",
        link: "comprateclado4.html",
        category: "Teclado"
    },
    {
        imgSrc: "../img/teclado3.png",
        altText: "Mucai 61",
        price: "R$ 137,99",
        currency: "",
        link: "compraTeclado5 ",
        category: "Teclado"
    },
    // teclados //
    {
        imgSrc: "../img/fone1.png",
        altText: "Razer one",
        price: "R$ 125.95",
        currency: "",
        link: "compraFone1.html",
        category: "Headset"
    },
    {
        imgSrc: "../img/fonemusgo1.png",
        altText: "Factus ultra",
        price: "R$ 180.90",
        currency: "",
        link: "compraFone2.html",
        category: "Headset"
    },
    {
        imgSrc: "../img/foneazul1.png",
        altText: "Kinsei azure",
        price: "R$ 250.99",
        currency: "",
        link: "compraFone3.html",
        category: "Headset"
    },
    {
        imgSrc: "../img/fonebeje1.png",
        altText: "Havit ultima",
        price: "R$ 174.95",
        currency: "",
        link: "compraFone4.html",
        category: "Headset"
    },
    {
        imgSrc: "../img/produto3.png",
        altText: "SOMNIUM PRO",
        price: "R$ 220.90",
        currency: "",
        link: "compraFone5.html",
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

document.getElementById('arrow-right-mouse').addEventListener('click', function (event) {
    event.preventDefault();
    scrollCards('mouseContainer');
});

document.getElementById('arrow-right-teclados').addEventListener('click', function (event) {
    event.preventDefault();
    scrollCards('tecladoContainer');
});

document.getElementById('arrow-right-headset').addEventListener('click', function (event) {
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