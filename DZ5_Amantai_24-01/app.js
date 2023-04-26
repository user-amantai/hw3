const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

// som.addEventListener('input', e => {
//     const request = new XMLHttpRequest()
//     request.open('GET', 'data.json')
//     request.setRequestHeader('Content-Type', 'application/json')
//     request.send()
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         console.log(data);
//         usd.value = (e.target.value / data.usd).toFixed(2)
//     })
// })

const convert = (elem, target, target2) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open('GET', 'data.json')
        request.setRequestHeader('Content-Type', 'application/json')
        request.send()
        request.addEventListener('load', () => {
            const data = JSON.parse(request.response)
            if(elem == target){
                target.value = (elem.value / data.usd).toFixed(2)
            }else if(elem == target2){
                target2.value = (elem.value / data.eur).toFixed(2)
            }else{
                target.value = (elem.value * data.usd).toFixed(2)
                target2.value = (elem.value * data.eur).toFixed(2)
            }
            elem.value === '' && (target.value = '')
        })
    })
}
convert(som, usd, eur)
convert(usd, som, eur)
convert(eur, som, usd)