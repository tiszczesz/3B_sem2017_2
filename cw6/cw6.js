window.onload = start;

function start(){
    document.getElementById("wykonaj").onclick = klik;
}
function klik(){
    var dane = document.getElementById("dane").value;
    var wybor = document.getElementById("wybor").value;
    var ilosc = parseInt(document.getElementById("ilosc").value);
    ilosc = !isNaN(ilosc) && ilosc>0 && ilosc<=20 ? ilosc : 5; 
    if(dane.trim()==""){
        document.getElementById("dane").style.border = "solid thin red";
        document.getElementById("wynik").innerHTML = "Błędne dane";
    }else{
        document.getElementById("dane").style.border = "solid thin grey";
        document.getElementById("wynik").innerHTML = "";
        switch (wybor){
            case "ul": GenerUL(dane,ilosc); break;
            case "ol": GenerOL(dane,ilosc); break;
            case "p": GenerP(dane,ilosc); break;  
            default :document.getElementById("wynik").innerHTML = "ZONK";
        }
    }
}

