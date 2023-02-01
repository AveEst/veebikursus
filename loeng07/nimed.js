let nimi=prompt("Sisesta enda nimi")
let valjundElement=document.getElementById("valjund")
for (let i=0;i<nimi.length;i++) {
    //let taht=nimi [i]
    //if (nimi [i)]) =="õ"
    //valjundElement.innerHTML+=nimi[i] +"<br>"
    //valjundElement.innerHTML+="Täht: " + i+ " - " + nimi[i] + "<br>"
    //valjundElement.innerHTML+="Täht: " + (i+1) +" - " + nimi[i] + "<br>

}
//valjundElement.innerHTML=" Tähed sinu nimes: <br>"
//valjundElement.innerHTML+=nimi[0] + "<br>"
//valjundElement.innerHTML+=nimi[1] + "<br>"
//valjundElement.innerHTML+=nimi[2] + "<br>"

if(nimi.length<=6){
valjundElement.innerHTML+="<h2>Sul on ilus lühike nimi.</h2>"
}else{
    valjundElement.innerHTML+="<h3>Sul on ilus pikk nimi.</h3>"
}

function valjastaRuut (x) {
    console.log(x*x)
    valjundElement.innerHTML+= x+ " ruut on " + (x*x) + "<br>"
}
valjastaRuut(10)
valjastaRuut(109)
valjastaRuut(68)