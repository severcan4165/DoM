const kredi = document.querySelector(".form-select");
const vade = document.querySelector(".vade2");
const tutar =document.querySelector(".tutar2");
const hesapla = document.querySelector(".btn");



const ihtiyac =2.10;
const konut = 1.7;
const arac = 1.9;
let faiz;
let taksitTutar;

hesapla.addEventListener("click", (e)=>{



e.preventDefault();
if(kredi.value=="konutKredi"){
    faiz = konut;

    
}

else if(kredi.value=="ihtiyacKredi"){

    faiz = ihtiyac;
}

else if(kredi.value=="aracKredi"){

    faiz = arac;

}
let faizOranı = faiz/100;
taksitTutar = tutar.value * ((faizOranı * (1 + faizOranı) ** vade.value)) /((1 + faizOranı) ** vade.value - 1);
console.log(taksitTutar)
    showTable();
})

const showTable = () => {
    const sonuc = document.querySelector(".sonuclar");
    sonuc.innerHTML = `
    <h2 class="mt-3 text-warning">Kredi Bilgileri</h2>
    <table class="table table-bordered border-warning mt-4">
    <tr>
        <td>Kredi Miktarı</td>
        <td>${tutar.value}</td>
        <td>Kredi Tipi</td>
        <td>${kredi.value}</td>
    </tr>
    <tr>
        <td>Vade</td>
        <td>${vade.value} ay</td>
        <td>Faiz Oranı</td>
        <td>${faiz}</td>
    </tr>
    <tr>
        <td>Toplam Tutar</td>
        <td>${(taksitTutar*vade.value).toFixed(2)} ₺</td>
        <td>Taksit Tutarı</td>
        <td>${taksitTutar.toFixed(2)} ₺</td>
    </tr>
</table>`;

};