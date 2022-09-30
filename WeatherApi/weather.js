// i couldnt find direct search by name, so i get a city name from user and by fetching i produced latitude and longtitude,
//this code is directing to getLatLon function
const locationByName = (name)=> {
    const apikey ="164d797659db7bbc347c414a223cc76b";
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=` + apikey;
    fetch(url).then((res) => {
        if(!res.ok){
            throw new Error();
        }
       return res.json();
    })
    .then((data) => getLatLon(data))
    .catch((error)=> console.log(error));
}
// these are for  data input
const searchBtn = document.querySelector(".btn");
const inputArea = document.querySelector(".inp")

// city, refers to a city which user searched for 
let city;
// latitude, longtitude
let lat;
let lon;

// capturing events by click, when user clicked to searchbutton, locationByName function is being called, 
// and so, all the chain is being started
searchBtn.addEventListener("click", ()=> {
    city = inputArea.value;
    locationByName(city);
    inputArea.value = ""; 
    inputArea.focus();

})

// capturing events by enter key
inputArea.addEventListener("keydown", (e)=>{
    if(e.keyCode == "13"){
        searchBtn.click();
    }
})

//this block is for getting latitude and longtitude of a city which user has searched for,
// and when the coordinates obtained, they are directed to weatherByLatLon function
const getLatLon = (latlon)=>{
    const {lat, lon} = latlon[0]
    weatherByLatLon(lat,lon);
}

// lat. and lon was obtained by getLanLon function, in here  we used these coordinates to obtain that certain city's
// weather. For that weatherByLatLon function was used.
const weatherByLatLon = (lat,lon) =>{
    // const time = new Date().getTime();
    const apikey ="164d797659db7bbc347c414a223cc76b";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=` + apikey + `&units=metric`;
    fetch(url).then((res) => {
        if(!res.ok){
            throw new Error();
        }
       return res.json();
    })
    .then((data) => renderLatLon(data))
    // .then((data) => console.log(data))
    .catch((error)=> console.log(error));
}

// this block is for displaying result on the browser
const renderLatLon = (data) =>{
    const {name, sys:{country}, main:{temp}, main:{temp_min}, main:{temp_max}, weather:[{description}], weather:[{icon}]} = data;
    let content = document.querySelector(".content");
    content.innerHTML += `
   <div class="city">${name},${country}</div>
          <div class="temp">${Math.round(temp)}°C</div>
          <img class="img" src="http://openweathermap.org/img/wn/${
            icon
          }.png" />
          <div class="desc">${description}</div>
          <div class="minmax">${Math.round(temp_min)}°C/${Math.round(
      temp_max
    )}°C</div>`;
}

window.onload =()=>{
    inputArea.focus();
}