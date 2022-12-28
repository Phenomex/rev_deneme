var thisyear=document.getElementById("Tyear");
var lastyear=document.getElementById("Lyear");
var thisyeargoal=document.getElementById("Tyg");
var averagedailyrate=document.getElementById("adr");
var daysleft=document.getElementById("Dleam");
var btnHesap=document.getElementById("hesapla");
var sonuc=document.getElementById("sonuc");


btnHesap.onclick=function(){
  var toplam = Number(Tyg.value) / Number(Dleam.value) / Number(adr.value);
  sonuc.innerHTML=toplam;

}
