const convertButton = document.querySelector(".convert-button") // mapear meu botão
const currencySelect = document.querySelector(".currency-select") // mapear meu select

// função principal para converter as moedas
function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value // mapear o valor do meu input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //  valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas
    const dolarToday = 5.2 // armazenar o valor do dólar
    const euroToday = 6.2
    const britishPoundToday = 6.8
    const bitcoinToday = 34.04

    if(currencySelect.value == "dolar"){
        // configuração para formatar os números corretamente
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday) // () divide o valor inserido no input pelo valor do dólar e etc
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / britishPoundToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

// função para mudar o nome e a bandeira das moedas
function changeCurrency(){
    const currencyName = document.getElementById("currency-name") // armazena o nome da moeda
    const currencyImage = document.querySelector(".currency-img") // armazena a imagem da moeda
    
    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano" // troca o nome da moeda
        currencyImage.src = "./assets/dolar.png" // troca a imagem da moeda
    }
    
    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues() // chama a função principal para ser aplicada após mudar as moedas do select
}

// função básica para tocar som ao pressionar o botão de converter
function playAudio() {
    const audio = document.getElementById("myAudio")
    audio.play()
}

currencySelect.addEventListener("change", changeCurrency) // chama a função de mudança de nome e bandeira
convertButton.addEventListener("click", convertValues)   // chama a função principal de conversão ao clicar no botão