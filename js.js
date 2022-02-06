let userName =prompt('İsminizi Giriniz');

let userNameElement=document.querySelector('#userName');


let dateTime=document.querySelector('#dateTime');
function dateTarih(){
    userNameElement.innerHTML=`Merhaba <b>${userName}</b> Hoş Geldin`;
    var tarih=new Date();
	var yil=tarih.getFullYear();
	var ay=tarih.getMonth();
	var gun=tarih.getDay();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
    let gunler=['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    dateTime.innerHTML= `${saat}:${dakika}:${saniye} ${gunler[gun]}`;
}

setInterval(dateTarih, 1000);
