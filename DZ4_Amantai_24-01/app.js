const wrapper = document.querySelector('.wrapper')

const getCard = () => {
    const request = new XMLHttpRequest() // создание запроса
    request.open('GET', 'data.json') // объявление метода запроса и его путь
    request.setRequestHeader('Content-Type', 'application/json') // добавления заголовка
    request.send() // отправка запроса

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response) // превращает к изначальному состоянию
        console.log(data);
        data.map((item) => {
            const card = document.createElement('div')
            const image = document.createElement('img')
            const title = document.createElement('h2')
            const price = document.createElement('p')
            const description = document.createElement('p')

            card.classList.add('card')
            image.classList.add('img')
            title.classList.add('title')
            price.classList.add('price')
            description.classList.add('description')

            image.src = item.image
            title.innerHTML = item.title
            price.innerHTML = item.price
            description.innerHTML = item.description

            wrapper.append(card)
            card.append(image)
            card.append(title)
            card.append(price)
            card.append(description)
        })
    })
}
getCard()