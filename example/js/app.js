const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabsContent = document.querySelectorAll('.tabcontent')
// console.log(tabs);
// console.log(tabsParent);
// console.log(tabsContent);

const handleHideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}
handleHideTabContent()

const handleShowTabContent = (i = 0) => {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
handleHideTabContent()
handleShowTabContent()

tabsParent.addEventListener('click', (e) => {
    const target = e.target
    if(target.classList.contains('tabheader__item')){
        console.log(target);
        tabs.forEach((item, i) => {
            if(item === target){
                handleHideTabContent()
                handleShowTabContent(i)
            }
    })
    }
})

const modal = document.querySelector('.modal')
const modalOpen = document.querySelector('.btn_white')
const modalClose = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}
function checkScroll() {
    let fullHeight = document.body.scrollHeight // высота страницы
    console.log(fullHeight);
    let innerHeight = window.innerHeight // видимая высота
    console.log(innerHeight);
    let scrollWindow = window.pageYOffset // насколько была прокручена
    console.log(scrollWindow);
    if(fullHeight <= scrollWindow + innerHeight){
        openModal()
    }
}
modal.addEventListener('click', closeModal)
modalOpen.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)
window.addEventListener('scroll', checkScroll);

const sliderPrev = document.querySelector('.offer__slider-prev')
const sliderNext = document.querySelector('.offer__slider-next')
const sliderImg = document.querySelectorAll('.offer__slide')
const currentBlock = document.querySelector('#current')

let sliderIndex = 0
function showSlider() {
    sliderImg.forEach((item) => {
        item.style.display = 'none'
    })
    sliderImg[sliderIndex].style.display = 'block'
    currentBlock.innerText = ('0' + (sliderIndex + 1))
}
showSlider()
sliderPrev.addEventListener('click', () => {
    showSlider()
    sliderIndex--
    if(sliderIndex < 0){
        sliderIndex = 0
    }
})
sliderNext.addEventListener('click', () => {
    showSlider()
    sliderIndex++
    if(sliderIndex >= sliderImg.length){
        sliderIndex = 3
    }
})
let changeNext = () => {
    showSlider()
    sliderIndex++
    if(sliderIndex >= sliderImg.length){
        sliderIndex = 0
    }
}
let intervalChange = setInterval(changeNext, 1000)
let stopInterval = addEventListener('click', () => {
    clearInterval(intervalChange)
        setTimeout(() => {
            intervalChange = setInterval(changeNext, 1000)
        }, 5000);
    })