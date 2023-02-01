let valjundElement=document.getElementById("valjund")
valjundElement.innerHTML="Numbrid: <br>"
//valjundElement.innerHTML=valjundElement.innerHTML + "1-"
//valjundElement.innerHTML=valjundElement.innerHTML + "2-"
//valjundElement.innerHTML=valjundElement.innerHTML + "3-"
//valjundElement.innerHTML=valjundElement.innerHTML + "4-"
//valjundElement.innerHTML=valjundElement.innerHTML + "5-"

for (let number=1; number<=10; number=number + 1){
    //valjundElement.innerHTML=valjundElement.innerHTML + number
    //valjundElement.innerHTML=valjundElement.innerHTML + "<br>"
    //valjundElement.innerHTML+= number
    //valjundElement.innerHTML+="<br>"
    valjundElement.innerHTML+=number+"<br>"
}


for (let number=10; number>=1; number=number - 1){
    //valjundElement.innerHTML=valjundElement.innerHTML + number
    //valjundElement.innerHTML=valjundElement.innerHTML + "<br>"
    //valjundElement.innerHTML+= number
    //valjundElement.innerHTML+="<br>"
    valjundElement.innerHTML+=number+"<br>"
}

