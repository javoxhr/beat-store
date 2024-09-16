let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#2cab37";

let item = "";

const cardsWrp = document.querySelector('.cards-wrapper');
const list = [
    {
        img: "./ipod.jpg",
        title: "Музыка номер 1",
        price: 30
    },
    {
        img: "./ipod.jpg",
        title: "Музыка номер 2",
        price: 90
    },
    {
        img: "./ipod.jpg",
        title: "Музыка номер 3",
        price: 60
    }
];

// Функция для отображения карточек товаров
function renderCards() {
    cardsWrp.innerHTML = list.map((el, i) => `
        <div class="card">
            <span class="price-ram">${el.price}$</span>
            <button class="card-btn" data-index="${i}">Купить за ${el.price}$</button>
        </div>
    `).join('');
}

renderCards();

cardsWrp.addEventListener('click', function(event) {
    if (event.target.classList.contains('card-btn')) {
        const index = event.target.dataset.index;
        item = list[index];
        tg.MainButton.setText(`Вы выбрали: ${item.title} за ${item.price}$`);
        tg.MainButton.show();
    }
});

tg.MainButton.onClick = function() {
    tg.sendData(JSON.stringify(item)); // Отправляем данные о товаре в бот
};

// Обработка события нажатия на кнопку "Оплатить" в боте
Telegram.WebApp.onEvent('mainButtonClicked', function() {
    tg.sendData(JSON.stringify(item)); // Отправляем данные в бот
});
