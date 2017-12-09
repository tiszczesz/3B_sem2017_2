window.onload = start;

function start(){
    document.getElementById("wykonaj").onclick = klik;
}
function klik(){
    var dane = document.getElementById("dane").value;
    alert(dane);
    if(dane.trim()==""){
        document.getElementById("dane").style.border = "solid thin red";
        document.getElementById("wynik").innerHTML = "Błędne dane";
    }else{
        document.getElementById("dane").style.border = "solid thin grey";
        document.getElementById("wynik").innerHTML = "";
    }
}

