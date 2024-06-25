const cardsData2 = [
    {
        "imgSrc": "foneproduto.png",
        "title": "Super 22",
        "colors": ["#ff0000", "#00ff00", "#0000ff"],
        "link": "#"
    },
    {
        "imgSrc": "anotherImage.png",
        "title": "Super 33",
        "colors": ["#ffff00", "#ff00ff", "#00ffff"],
        "link": "#"
    },
    {
        "imgSrc": "anotherImage.png",
        "title": "Super 39",
        "colors": ["#ffff00", "#ff00ff", "#00ffff"],
        "link": "#"
    },
];

const container2 = document.getElementById('cardContainer2');

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
<div class="imgBx">
    <img src="${card.imgSrc}" alt="${card.title}">
</div>
<div class="contentBx">
    <h2>${card.title}</h2>
    <br>
    <div class="color">
        <h3>Color :</h3>
        ${card.colors.map(color => `<span style="background: ${color};"></span>`).join('')}
    </div>
    <br>
    <a href="${card.link}">comprar</a>
</div>
`;

    container.appendChild(cardElement);
});