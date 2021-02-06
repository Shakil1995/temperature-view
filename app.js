
const apiKey='dfa1ed3cc669a72134469ef0dba59f77';
const apiBase='https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

const searchBtn = document.getElementById('searchBtnID');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity)
})


const updateUI = data => {
    document.getElementById('showCityID').innerText = data.name || "Unknown Location!";
    document.getElementById('showDegreeID').innerText = data.main.temp;
    document.getElementById('cloudsID').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = "";
}

getWeatherData('dhaka');


