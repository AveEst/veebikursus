//järgnevad standardsed ülesanded on vaja teha igal hommikul

const ylesanne1={
    kirjeldus: "Lugeda head raamatut",
    olulisus: 3,
    kasTehtud: false,
    kategooria: "heaolu"
}

const ylesanne2={
    kirjeldus: "Käia teatris või kinos",
    olulisus: 3,
    kasTehtud: true,
    kategooria: "heaolu"
}

const ylesanne3={
    kirjeldus: "Jookse kolm korda nädalas 3 kilomeetrit",
    olulisus: 4,
    kasTehtud: false,
    kategooria: "heaolu"
}

const ylesanded=[
    ylesanne1,
    ylesanne2,
    ylesanne3
]

//parameeter - objekt ülesanne
//tagastab - teksti kujul ühe ülesande html-i
function koostaYlesandeHTML(ylesanne){
    let margitud=""

if(ylesanne.kasTehtud){
    margitud="checked"
}

const ylesanneHTML=`
<div class="ylesanne row">
    <div class="kasTehtud col-1"><input type="checkbox" name="kasTehtud"${margitud}></div>
    <div class="kirjeldus col-6">${ylesanne.kirjeldus}</div>
    <div class="kategooria col-3">${ylesanne.kategooria}</div>
    <div class="olulisus col-2">${ylesanne.olulisus}</div>
</div>
`
return ylesanneHTML
}

let koguValjundHtml=""

for (let ylesanne of ylesanded){
    koguValjundHtml+=koostaYlesandeHTML(ylesanne)

}

//vajalik esmase väljundi saamiseks
document.getElementById("valjund").innerHTML=koguValjundHtml