var dzielna,dzielnik = 31;

function losujCalaLiczbe(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function losuj() {
 
 while (dzielna*dzielnik > 30 ) {
  dzielna = losujCalaLiczbe(1,9);
  dzielnik = losujCalaLiczbe(1,9);
}
 document.getElementById("dzielna").innerHTML = dzielna;
 document.getElementById("dzielnik").innerHTML = dzielnik;
}

function sprawdz () {

 if  ( document.getElementById("wynik").innerHTML = dzielna * dzielnik) { document.getElementById("h1").innerHTML = 'hurra';}
}