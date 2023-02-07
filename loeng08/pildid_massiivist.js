const pildiAadressid=[
    './puuvili.jpg',
    './puuviljad.jpg',
]


function teePildHTML(pildiAadress){
    return`
    <div class="pildiYmbris">
    <img src="${pildiAadress}">
    </div>
    `  
}


let pildiGaleriiHTML='' 

for (let yksAadress of pildiAadressid){
    pildiGaleriiHTML += teePildHTML(yksAadress)
}

document.getElementById("valjund").innerHTML=pildiGaleriiHTML