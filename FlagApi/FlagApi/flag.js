
const getCountriesByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;

    fetch(url).then((res)=> {
        if(!res.ok){
            errorCatch(`Something went wrong: ${res.status}`);
            throw new Error();
        }
        
        return res.json();
    })
    .then((data) => renderCountries(data))
    // .then((data) => console.log(data))
    .catch((errors) => console.log(errors));
};
const getAllCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;

    fetch(url).then((res)=> {
        if(!res.ok){
            errorCatch(`Something went wrong: ${res.status}`);
            throw new Error();
        }
        
        return res.json();
    })
    // .then((data) => renderCountries(data))
    .then((data) => optionSelect(data))
    // .then((data) => console.log(data))
    .catch((errors) => console.log(errors));
};


const errorCatch = () => {
    const diV = document.querySelector(".row");
    diV.innerHTML =` <h2>Countries can not fetched</h2>
    <img src="404.png" alt="" />`;
};

const opTion = document.querySelector(".liste");

const optionSelect = (data) => {

    data.forEach((item) => {   

        let icerik = `<option>${item.name.common}</option>`
        opTion.innerHTML += icerik;
    });

}

opTion.addEventListener("change", (event) => {

    getCountriesByName(event.target.value);
    
})

const renderCountries = (data) => {
    const diV =document.querySelector(".row");
   
        const {flags:{png}, languages, name:{common}, region, currencies, capital} = data[0];
        diV.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${common}</h5>
          <p class="card-text">${region}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
          <i class="fas fa-lg fa-landmark"></i> ${capital}
          </li>
          <li class="list-group-item">
          <i class="fas fa-lg fa-comments"></i> ${Object.values(languages)}
          </li>
          <li class="list-group-item">
          <i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(currencies).map((item) => Object.values(item)+ " ")}
          </li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`

        


};

getAllCountries();