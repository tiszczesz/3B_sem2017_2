window.onload = start;
var index=0;
function start(){
    document.getElementById("wykonaj").onclick = klik;
    document.getElementById("start").onclick = show;
}
function show(){
    var napis = "Lorem Ipsum jest tekstem stosowanym ";
    var refreshIntervalId = setInterval(
            function(){
         console.log(index);
        if(index<napis.length){
            document.getElementById("tekst").innerHTML += napis[index++];           
        }else{
            clearInterval(refreshIntervalId);
        }
    },200);
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
function GenerUL(dane,ilosc){
    var html = "<ul>";
    for(var i=0;i<ilosc;i++){
        html += "<li>"+dane+"</li>";
    }    
    html += "</ul>";
    document.getElementById("wynik").innerHTML =  html;
}
function GenerOL(dane,ilosc){
    var html = "<ol>";
    for(var i=0;i<ilosc;i++){
        html += "<li>"+dane+"</li>";
    }    
    html += "</ol>";
    document.getElementById("wynik").innerHTML =  html;
}

