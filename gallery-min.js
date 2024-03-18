const boutonsFiltres=Array.from(document.querySelectorAll(".filters-menu button")),grid=document.getElementById("static-thumbnails"),staticThumbnails=` <a href="assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/concerts/aaron-paul-thumb.jpg" alt="Photo d'un concert par Aaron Paul"></a>
                           <a href="assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/entreprise/ali-morshedlou-thumb.jpg" alt="Photo de Ali Morshedlou"></a>
                           <a href="assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/entreprise/jason-goodman-thumb.jpg" alt="Photo de Jason Goodman"></a>
                           <a href="assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/mariage/hannah-busing-thumb.jpg" alt="Photo de Hannah Busing"></a>
                           <a href="assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/portraits/ade-tunji-thumb.jpg" alt="Photo de Ade Tunji"></a>
                           <a href="assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/mariage/jakob-owens-thumb.jpg" alt="Photo de Jakob Owens"></a>
                           <a href="assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/portraits/nino-van-thumb.jpg" alt="Photo de Nino Van Prattenburg"></a>
                           <a href="assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/concerts/austin-neill-thumb.jpg" alt="Photo de Austin Neil"></a>
                           <a href="assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/entreprise/mateus-campos-thumb.jpg" alt="Photo de Mateus Campos"></a>
                        `,concertPics=`  <a href="assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/concerts/aaron-paul-thumb.jpg" alt="Photo d'un concert par Aaron Paul"></a>
                           <a href="assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.jpg" data-fslightbox="gallery">
                           <img src="assets/images/gallery/concerts/austin-neill-thumb.jpg" alt="Photo de Austin Neil"></a>
                        `,buisnessPics=`<a href="assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" data-fslightbox="gallery">
                         <img src="assets/images/gallery/entreprise/ali-morshedlou-thumb.jpg" alt="Photo de Ali Morshedlou"></a>
                         <a href="assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.jpg" data-fslightbox="gallery">
                         <img src="assets/images/gallery/entreprise/jason-goodman-thumb.jpg" alt="Photo de Jason Goodman"></a>
                         <a href="assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.jpg" data-fslightbox="gallery">
                         <img src="assets/images/gallery/entreprise/mateus-campos-thumb.jpg" alt="Photo de Mateus Campos"></a>
                        `,weddingPics=` <a href="assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.jpg" data-fslightbox="gallery">
                          <img src="assets/images/gallery/mariage/hannah-busing-thumb.jpg" alt="Photo de Hannah Busing"></a>
                          <a href="assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.jpg" data-fslightbox="gallery">
                          <img src="assets/images/gallery/mariage/jakob-owens-thumb.jpg" alt="Photo de Jakob Owens"></a>
                        `,portraitPics=`
                          <a href="assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.jpg" data-fslightbox="gallery">
                          <img src="assets/images/gallery/portraits/ade-tunji-thumb.jpg" alt="Photo de Ade Tunji"></a>
                          <a href="assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.jpg" data-fslightbox="gallery">
                          <img src="assets/images/gallery/portraits/nino-van-thumb.jpg" alt="Photo de Nino Van Prattenburg"></a>
                        `;function afficherTout(){grid.innerHTML=staticThumbnails,refreshFsLightbox()}function afficherPics(a){grid.innerHTML="",grid.innerHTML=a,refreshFsLightbox()}boutonsFiltres.forEach(a=>{a.addEventListener("click",s=>{s.preventDefault();let e=a.id;"tous"===e?afficherTout():"concert"===e?afficherPics(concertPics):"entreprise"===e?afficherPics(buisnessPics):"mariage"===e?afficherPics(weddingPics):"portrait"===e&&afficherPics(portraitPics)})});for(let i=0;i<boutonsFiltres.length;i++)boutonsFiltres[i].addEventListener("click",a=>{a.preventDefault(),boutonsFiltres.forEach(s=>{let e=a.target;s.classList.remove("target"),e.classList.add("target")})});