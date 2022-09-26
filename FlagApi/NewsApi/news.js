let isError = false;

const getNews = async function(){
    const apikey = "f4b42ede62ab4637ad3a0ba2de863692";
    const url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + apikey;
    try{
        const respons = await fetch(url);
        if(!respons.ok){
            isError = true;
        }
        const data = await respons.json();
        renderNews(data.articles);
        
    }catch(error){

    }

}

const renderNews = (news) => {
    const diV = document.querySelector(".row");
    console.log(diV)
    if (isError) {
        diV.innerHTML += `
          <h2>News Can not be fetched</h2>
          <img src="404.png" alt="" />
        `;
        return;
      }
    news.forEach((item) => {
        const {title, urlToImage, author, description} = item;

        diV.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${author}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
        <img src="${urlToImage}" class="card-img-top" alt="...">
        <p class="card-text">${description}</p>
        </div>
    </div>`
    });
 
  

}
// window.addEventListener("load", getNews);
getNews();
