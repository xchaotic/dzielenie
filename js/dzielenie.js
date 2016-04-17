
function losujCalaLiczbe(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function losuj() {
dzielna = 31;
dzielnik = 32;

 while (dzielna*dzielnik > 30 ) {
  dzielna = losujCalaLiczbe(1,9);
  dzielnik = losujCalaLiczbe(1,9);
}
 document.getElementById("dzielna").innerHTML = dzielna;
 document.getElementById("dzielnik").innerHTML = dzielnik;
}

function sprawdz () {

wynik = document.getElementById('wynik').value;
dzielna = document.getElementById('dzielna').innerHTML;
dzielnik = document.getElementById('dzielnik').innerHTML;

 if  ( wynik == (dzielna * dzielnik)) { document.getElementById("h1").innerHTML = 'hurra'}
 else  {document.getElementById("h1").innerHTML = 'zle!';}
 console.log(wynik);
  console.log(dzielna);
   console.log(dzielnik);
}