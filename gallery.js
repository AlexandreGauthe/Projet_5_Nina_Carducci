const boutonsFiltres = Array.from(document.querySelectorAll(".filters-menu button"));
const reponse = await fetch("photo.json");
const photos = await reponse.json();
const grid = document.getElementById("static-thumbnails");

function afficherTout(){
    grid.innerHTML="";
    for (let i =0; i < photos.length; i++){
        const lien = document.createElement("a");
        const photo = document.createElement("img");
        lien.href = photos[i].image;
        lien.setAttribute("data-fslightbox","gallery");
        photo.src = photos[i].appercu;
        photo.setAttribute("alt",photos[i].description);
        lien.appendChild(photo);
        grid.appendChild(lien);
        }
    refreshFsLightbox();
}
function afficherPics(liste){
    grid.innerHTML="";
    for (let i =0; i < liste.length; i++){
        const lien = document.createElement("a");
        const photo = document.createElement("img");
        lien.href = liste[i].image;
        lien.setAttribute("data-fslightbox","gallery");
        photo.src = liste[i].appercu;
        photo.setAttribute("alt",liste[i].description);
        lien.appendChild(photo);
        grid.appendChild(lien);
        }
    refreshFsLightbox();

}
afficherTout();
boutonsFiltres.forEach((bouton) =>{
    bouton.addEventListener('click',(e)=>{
        e.preventDefault();
        const btnChoisi = bouton.id;
        if(btnChoisi === "tous"){
            afficherTout();
        }
        else{
            const photosTriees = photos.filter(function(photo){
                return photo.categorie === btnChoisi;
            });
            afficherPics(photosTriees);
       }
    })
})

for(let i=0; i< boutonsFiltres.length; i++)
boutonsFiltres[i].addEventListener('click',(e) =>{
    e.preventDefault();
    boutonsFiltres.forEach((bouton)=>{
        const btnClique = e.target;
        bouton.classList.remove("target");
        btnClique.classList.add("target");
    })
})

