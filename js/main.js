//API Key: ccbf52c53f1e40c4b5b144818230404
document.querySelector('button').addEventListener('click', getWeather)
document.querySelector('input').addEventListener('keydown', event => {
    if (event.keyCode !== 13) return console.log(event.target.value);
    getWeather();
  });
 
function getWeather(){
    let city = document.querySelector('input').value
    let temp = 0
    const url = (`http://api.weatherapi.com/v1/forecast.json?key=ccbf52c53f1e40c4b5b144818230404&q=${city}&days=1&aqi=yes&alerts=yes
    `)
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.current)
        console.log(data.current.condition.code)
        console.log(city)
        document.querySelector('h2').innerText = ` ${data.current.temp_f}\xB0 F`
        document.querySelector('h3').innerText = data.current.condition.text
        document.querySelector('img').src = `https:${data.current.condition.icon}`
    //   document.querySelector('img').src = data.hdurl
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


