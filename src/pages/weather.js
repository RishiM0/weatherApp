
function weatherData(tempF, tempC, condition, icon, precipmm, precipin, windmph, windkph, humid, cloud) {
    this.tempF = tempF;
    this.tempC = tempC;
    this.condition = condition;
    this.icon = icon;
    this.precipmm = precipmm;
    this.precipin = precipin;
    this.windmph = windmph;
    this.windkph = windkph;
    this.humid = humid;
    this.cloud = cloud;
}

async function getWeather(city) {
    const key = '05763633a9b64264b6c12601232506'
    const api = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;

    try {
        let route = await fetch (api);
        let routejson = route.json();
        let tempF = routejson['current']['temp_f'];
        let tempC = routejson['current']['temp_c'];
        let condition = routejson['current']['condition']['text'];
        let icon = routejson['current']['condition']['icon'];
        let precipmm = routejson['current']['precip_mm'];
        let precipin = routejson['current']['precip_in'];
        let windmph = routejson['current']['wind_mph'];
        let windkph = routejson['current']['wind_kph'];
        let humid = routejson['current']['humidity'];
        let cloud = routejson['current']['cloud'];
        let theData = weatherData(tempF, tempC, condition, icon, precipmm, precipin, windmph, windkph, humid, cloud);
        return theData;
    } catch(error) {
        return 'error'
    }
}

function postWeather(city) {
    let webpage = document.querySelector('.page');
    let theData = getWeather(city);
    if(theData = 'error') {
        return 'error';
    }
    const display = document.createElement('div');
    display.classList.add('weatherData');
    let tempdiv = document.createElement('div');
    tempdiv.classList.add('section');
    let questiondiv = document.createElement('div');
    questiondiv.classList.add('category')
    questiondiv.textContent = 'Temperature: ';
    let answerdiv = document.createElement('div');
    answerdiv.classList.add('answer')
    answerdiv.textContent = `${theData['tempF']} F / ${theData['tempC']} C`;
    tempdiv.appendChild(questiondiv);
    tempdiv.appendChild(answerdiv);
    let condition = document.createElement('div');
    condition.classList.add('section');
    questiondiv = document.createElement('div');
    questiondiv.classList.add('category');
    questiondiv.textContent = 'Conditions: '
    answerdiv = document.createElement('div');
    answerdiv.classList.add('answer');
    answerdiv.textContent = theData['condition'];
    condition.appendChild(questiondiv);
    condition.appendChild(answerdiv);
    let percipitation = document.createElement('div');
    percipitation.classList.add('section');
    questiondiv = document.createElement('div');
    questiondiv.classList.add('category');
    questiondiv.textContent = 'Percipitation: '
    answerdiv = document.createElement('div');
    answerdiv.classList.add('answer');
    answerdiv.textContent = `${theData['percipmm']} mm / ${theData['percipin']} in`;
    percipitation.appendChild(questiondiv);
    percipitation.appendChild(answerdiv);
    let wind = document.createElement('div');
    wind.classList.add('section');
    questiondiv = document.createElement('div');
    questiondiv.classList.add('category');
    questiondiv.textContent = 'Wind Speed: '
    answerdiv = document.createElement('div');
    answerdiv.classList.add('answer');
    answerdiv.textContent = `${theData['windmph']} mph / ${theData['windkph']} kph`;
    wind.appendChild(questiondiv);
    wind.appendChild(answerdiv);
    let humidity = document.createElement('div');
    humidity.classList.add('section');
    questiondiv = document.createElement('div');
    questiondiv.classList.add('category');
    questiondiv.textContent = 'Humidity: '
    answerdiv = document.createElement('div');
    answerdiv.classList.add('answer');
    answerdiv.textContent = theData['humid'];
    humidity.appendChild(questiondiv);
    humidity.appendChild(answerdiv);
    let cloudCover = document.createElement('div');
    cloudCover.classList.add('section');
    questiondiv = document.createElement('div');
    questiondiv.classList.add('category');
    questiondiv.textContent = 'Cloud Cover: '
    answerdiv = document.createElement('div');
    answerdiv.classList.add('answer');
    answerdiv.textContent = theData['cloud'];
    cloudCover.appendChild(questiondiv);
    cloudCover.appendChild(answerdiv);
    display.appendChild(tempdiv);
    display.appendChild(condition);
    display.appendChild(percipitation);
    display.appendChild(wind);
    display.appendChild(humidity);
    display.appendChild(cloudCover);

    const iconDisplay = document.createElement('div');
    display.classList.add('weatherIcon');
    let image = document.createElement('img');
    image.src = theData['icon'];
    iconDisplay.appendChild(image);

    webpage.appendChild(display);
    webpage.appendChild(iconDisplay);
}

export default postWeather;