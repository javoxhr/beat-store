let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.textColor = "#ffffff"
tg.MainButton.color = "#2cab37"

let item = ""

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

const buyBtn = document.querySelectorAll('.card-btn')

buyBtn.forEach((el, i)=> {
    el.addEventListener('click', function() {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide()
        }  else {
            tg.MainButton.setText(`Вы выбрали музыка: ${i + 1}`)
            item = i + 1
            tg.MainButton.show()
        }
    })
})

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item)
})