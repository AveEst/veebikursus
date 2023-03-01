/*console.log(' ikka ei tööta');
const url='http://localhost:8080';
const app=document.querySelector('#app');*/

const url = 'http://localhost:8080';
const app = document.querySelector('#app');


function kysiMatkad(){
fetch(url)
.then((response) =>{
 return response.json();
}).then((data) => {
  console.log(data);
  let matkadHTML =`<p>Matkade läbiviija: ${data.labiviija}</p>`;

  matkadHTML+=`<div class="matkad"`
   for (let i = 0; i < data.matkad.length; i++) {
     matkadHTML += `<div class="matk">
     <span>${data.matkad[i].image}</span><br>
     <span>${data.matkad[i].pealkiri}</span><br>
     <span>${data.matkad[i].sisu}</span><br>
       <span>Kestvus ${data.matkad[i].kestvus}</span><br>
       <span>Pikkus ${data.matkad[i].pikkus}</span><br>
       <span>Kogunemiskoht ${data.matkad[i].kogunemiskoht}</span><br>
       <span>Rühma suurus ${data.matkad[i].ryhma_suurus}</span><br>
       <span>Hind ${data.matkad[i].hind}</span><br>,
       <img class="pilt" src="&{data.matkad[i].pilt}</span</br>
       
     </div>`;
   }
 
   app.innerHTML = matkadHTML;
});
}
 
 kysiMatkad();

/*async function kysiMatkad(){
   const response=await fetch(url);
   const data=await response.json();
   console.log(data);
   let matkadHTML=`<p>Matkade läbiviija: ${data.labiviija}</p>`;
   for(let i=0; i<data.matkad.length;i++){
   }
   app.innerHTML=matkadHTML;
}
kysiMatkad();*/






