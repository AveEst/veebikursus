console.log('töötab');

//Fetch API 

const url='http://localhost:8080';
const app=document.querySelector('#app');


async function kysiMatkad(){
    const response = await fetch(url);
    const data=await response.json();
    console.log(data);
    let matkadHTML=`<p>Matkade läbiviija: ${data.labiviija}</p>`;
 for(let i=0; i<data.matkad.length;i++){
    matkadHTML+=`<div class="matk">
    <span>${data.matkad[i].pealkiri}</span>
    <span>Kestvus ${data.matkad[i].kestvus}</span>;
    </div>`;
 }

 app.innerHTML=matkadHTML;
    
}

    //fetch(url)
    //.then((response) => {
      //return response.json();
    //})
    //.then((data) => {
    //console.log(data);
    //app.innerHTML=data.labiviija;
    //});
    //}

    kysiMatkad();


    