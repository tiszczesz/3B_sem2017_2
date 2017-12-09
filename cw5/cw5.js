window.onload = start;

function start(){
    document.getElementById("wykonaj").onclick = klik;
}
function klik(){
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    if(isNaN(a) || isNaN(b)){
        document.getElementById("wynik").innerHTML="Błedne dane!!";
    }else{
        var dzielenie = b==0 ? "Brak wyniku": (a/b).toFixed(2);
        var wynik = document.getElementById("wynik");
        var dzialania  =document.getElementsByName("dzialanie");
        for(var i=0;i<dzialania.length;i++){
            if(dzialania[i].checked){
                var wybor = dzialania[i].value;
                break;
            }
        }
        //alert(wybor);
        switch(wybor){
            case '+': wynik.innerHTML=a+" + "+b+" = "+(a+b); break;
            case '-': wynik.innerHTML=a+" - "+b+" = "+(a-b); break;
            case '*': wynik.innerHTML=a+" * "+b+" = "+(a*b); break;
            case '/': wynik.innerHTML=a+" / "+b+" = "+dzielenie; break;
        }
    }    
}

