let Euro = document.getElementById("euro");
let Lis = document.getElementById("lis");


Euro.addEventListener("input", function(){devise(this.id , this.value);});
Lis.addEventListener("input", function(){devise(this.id , this.value);});

function devise(id, valeur){
    if(id == "euro"){
        lis.value = valeur / 1.49 ;
    }else if(id == "lis"){
        euro.value = valeur * 1.49;
    }
}