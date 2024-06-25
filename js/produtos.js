const categoryData = [
    {
        id: "cardContainer1",
        items: [
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
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 39",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 39",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 44",
                "colors": ["#000000", "#ffffff", "#ff0000"],
                "link": "#"
            }
        ]
    },
    {
        id: "cardContainer2",
        items: [
            {
                "imgSrc": "foneproduto.png",
                "title": "Super 23",
                "colors": ["#ff0000", "#00ff00", "#0000ff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 34",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 40",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 40",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 40",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 45",
                "colors": ["#000000", "#ffffff", "#ff0000"],
                "link": "#"
            }
        ]
    },
    {
        id: "cardContainer3",
        items: [
            {
                "imgSrc": "foneproduto.png",
                "title": "Super 24",
                "colors": ["#ff0000", "#00ff00", "#0000ff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 35",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 41",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 41",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 41",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 46",
                "colors": ["#000000", "#ffffff", "#ff0000"],
                "link": "#"
            }
        ]
    },
    {
        id: "cardContainer4",
        items: [
            {
                "imgSrc": "foneproduto.png",
                "title": "Super 25",
                "colors": ["#ff0000", "#00ff00", "#0000ff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 36",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 42",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 42",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 42",
                "colors": ["#ffff00", "#ff00ff", "#00ffff"],
                "link": "#"
            },
            {
                "imgSrc": "anotherImage.png",
                "title": "Super 47",
                "colors": ["#000000", "#ffffff", "#ff0000"],
                "link": "#"
            }
        ]
    }
];

categoryData.forEach(category => {
    const container = document.getElementById(category.id);

    category.items.forEach(card => {
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
});
