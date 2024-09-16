const cardsWrp = document.querySelector('.cards-wrapper')
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
]

list.forEach((el)=> {
    cardsWrp.innerHTML += `
    <div class="card">
    <span class="price-ram">${el.price + '$'}</span>
     <button class="card-btn">Купить за ${el.price + '$'}</button>
    </div>
    `
    console.log(el)
})