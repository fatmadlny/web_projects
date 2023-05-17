const url = 'https://api.openweathermap.org/data/2.5/'
const key = '1f779fdd7f33775a0e140efac90f7913'

// e parametreden gelen olay
// Yakaladigim olay üzerinden key kodunu arastircam
// yaptimiz getResult fonk nuna sehir ismini gonderelim
const setQuery = (e) => {
    if(e.keyCode == '13')
      getResult(searchBar.value)

}

const getResult = (cityName) => {
    //console.log(cityName); 
    //yukarıdaki konsolda salıstı dene
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    //console.log(query); bunu yazdığında json formatında veriler hazır
    fetch(query)
    .then(weather => {
        return weather.json() // degeri dondur
    })
    .then(displayResult)
}

const displayResult = (result) => {
    // console.log(result); deneme 
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`
    
    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

//input degerlerini yakalamak icin, searchBar id den gelenleri
//bu etiket uzerinden gelenlerle islem yapabilmek icin de dinleme yapicam
//enter basıldıgında sehir girilmis olucak (keypress) devamında ise istedigimzi fonk caliscak(setQury)
const searchBar = document.getElementById('searchBar')
//searchBar.addEventListener('keypress', setQuery)
searchBar.addEventListener('keypress', setQuery)
