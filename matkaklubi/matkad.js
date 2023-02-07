let matkad=[
    {
        nimi: "Jalgsimatk Pärnumaal",
        kirjeldus:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quisquam, laboriosam deleniti eligendi ullam inventore, ducimus quae quia, harum ipsum praesentium assumenda illum deserunt modi. Commodi nostrum quod unde voluptas",
        pildiAadress: "./liblikas1.png"
    },

    {
        nimi: "Rattamatk Jõgevamaal",
        kirjeldus:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quisquam, laboriosam deleniti eligendi ullam inventore, ducimus quae quia, harum ipsum praesentium assumenda illum deserunt modi. Commodi nostrum quod unde voluptas",
        pildiAadress: "./liblikas2.png"
    },

    {
        nimi: "Süstamatk Kõrvemaal",
        kirjeldus:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quisquam, laboriosam deleniti eligendi ullam inventore, ducimus quae quia, harum ipsum praesentium assumenda illum deserunt modi. Commodi nostrum quod unde voluptas",
        pildiAadress: "./matkaja.png"
    },

]

function koostaMatkaHTML(matk){
    return`
    <div class="card">
        <img class="card-img-top width:60%" src="${matk.pildiAadress}" alt="">
        <div class="card-body"></div>
        <h4>${matk.nimi}</h4>
        <p>
        ${matk.kirjeldus}
        </p>
    </div>
</div>
`
}

let matkadeHTML=' '

for(let matk of matkad){
    matkadeHTML+=koostaMatkaHTML(matk)
}

document.querySelector("matkad").innerHTML=matkadeHTML