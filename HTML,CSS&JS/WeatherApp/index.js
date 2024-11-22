let searchBox = document.getElementById('searchBox');
let city = document.getElementById('city');
let temprature = document.querySelector('.temprature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let Humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
let main = document.querySelector ('main');
let id = '9505fd1df737e20152fbd78cdb289b6a';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

form.addEventListener('submit', (event)=>
{
   event.preventDefault();
   if(searchBox.value != '')
    searchWeather()
})

const searchWeather=()=> {
    fetch(url + '&q=' + searchBox.value)
   .then(response => response.json())
   .then(data=>{console.log(data)
    if(data.cod == 200){
     city.querySelector('figcaption').innerText= data.name;
     city.querySelector('img').src= `https://flagsapi.com/${data.sys.country}/shiny/64.png`
 
    temprature.querySelector('img').src=` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    temprature.querySelector('figcaption span').innerText = data.main.temp;
    description.innerText = data.weather[0].description;
    clouds.innerText = data.clouds.all;
    Humidity.innerText = data.main.humidity;
    pressure.innerText = data.main.pressure;
    } else {
       main.classList.add('error')
       setTimeout(()=> {
         main.classList,remove('error')
       },1000)
    }
    searchBox.value = '';
  });
}
const firstInterface = () => {
   searchBox.value = "Chennai";
   searchWeather();
}
firstInterface()