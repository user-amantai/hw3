const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (elem, target, target2) => {
    elem.addEventListener('input', () => {
        fetch('data.json')
            .then((response) => response.json())
            .then(data => {
                if(elem === som){
                    target.value = (elem.value/data.usd).toFixed(2)
                    target2.value = (elem.value/data.eur).toFixed(2)
                }
                else if(elem === usd){
                    target2.value = (elem.value*data.usd).toFixed(2)
                    target.value = (elem.value*data.eur/data.usd).toFixed(2)
                }
                else if(elem === eur){
                    target2.value = (elem.value*data.eur).toFixed(2)
                    target.value = (elem.value*data.usd/data.eur).toFixed(2)
                }
                elem.value === '' &&(target.value = '')
        })
        .catch(e => console.error(e))
    })
}

convert(som, usd, eur)
convert(usd, eur, som)
convert(eur, usd, som)