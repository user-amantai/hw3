const backColor = document.querySelector('#bgc')
const time = document.querySelector('#time')
const text = document.querySelector('#text')
let timer = 0
setInterval(() => {
    timer++
    if (timer <= 300) {b
        let minutes = Math.floor(timer / 60)
        let seconds = timer % 60
        time.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        if (minutes === 1) {
            text.innerHTML = "Прошла минута"
            backColor.style.background = 'green'
        } else if (minutes === 2) {
            text.innerHTML = "Прошло 2 минуты"
            backColor.style.background = 'blue'
        } else if (minutes === 3){
            text.innerHTML = "Прошло 3 минуты"
            backColor.style.background = 'pink'
        } else if (minutes === 4){
            text.innerHTML = "Прошло 4 минуты"
            backColor.style.background = 'teal'
        }
    }
    else {
        clearInterval()
        text.innerHTML = "Время вышло"
        backColor.style.background = 'crimson'
    }
}, 50)