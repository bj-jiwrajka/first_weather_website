const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = '6bdcc2a7794509ba530ddd5e9b6f1457';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {

                container.style.height = '400px';

                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';

                error404.style.display = 'block';
                error404.classList.add('fadeIn');

                return;

            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temp = document.querySelector('.weather-box .temp');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

                    switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/Clear.jpg';
                    break;

                case 'Rain':
                    image.src = 'images/Rain.jpg';
                    break;

                case 'Snow':
                    image.src = 'images/Snow.jpg';
                    break;

                case 'Clouds':
                    image.src = 'images/Clouds.jpg';
                    break;

                case 'Haze':
                    image.src = 'images/Mist.jpg';
                    break;

                case 'Mist':
                    image.src = 'images/Mist.jpg';
                    break; ription

                case 'Smoke':
                    image.src = 'images/Smoke.jpg';
                    break;

                default:
                    image.src = '';
            }


            temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');

            container.style.height = '590px';

        });

});
const audio = new Audio("click-21156.mp3");
function myfun(audio) {
    audio.play();
}
$("#pass").keypress(function (event) {
    if (event.keyCode === 13) {
        $("#btnn").click();
    }
});
