/****************************************************/
/* This file products.js was written by Shaun Gedye */
/****************************************************/

{/* <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="lentes">
  <div id="001" class="card">
    <div class="img-container">
      <img src="" class="card-img-top store-img" alt="imagen de gafas rosadas" />
    </div>
    <div class="card-body d-none d-md-block">
      <div class="card-text d-flex justify-content-between text-capitalize">
        <h5 id="store-item-name">Lentes Rosas</h5>
      </div>
    </div>
  </div>
</div> */}


const storeData = [
  { id: '001', dataItem: 'lentes', imgSrc: './img/gafas-rosadas.jpg', alt: 'gafas rosadas', title: 'Lentes Rosas' },
  { id: '002', dataItem: 'limpiadores', imgSrc: './img/solution-oxi.jpg', alt: 'solución-oxi', title: 'Multi Solución Oxi' },
  { id: '003', dataItem: 'lentes', imgSrc: './img/gafas-nino.jpeg', alt: 'gafas para los niños', title: 'Lentes para los niños' },
  { id: '004', dataItem: 'contactos', imgSrc: './img/contactos-avaira.jpeg', alt: 'contactos avaira', title: 'Contactos Avaira' },
  { id: '005', dataItem: 'limpiadores', imgSrc: './img/contactos-clean.jpeg', alt: 'puremoist solución de contactos', title: 'Solución de contactos' },
  { id: '006', dataItem: 'limpiadores', imgSrc: './img/reflect-free.jpg', alt: 'reflect limpiador', title: 'Reflect Free' },
  { id: '007', dataItem: 'lentes', imgSrc: './img/gafas-3.jpeg', alt: 'varios lentes', title: 'Selección de lentes' },
  { id: '008', dataItem: 'limpiadores', imgSrc: './img/contactos-clean2.jpeg', alt: 'solución multipropósito', title: 'Solución multipropósito' },
  { id: '009', dataItem: 'contactos', imgSrc: './img/contactos-biofinity.jpeg', alt: 'contactos biofinity', title: 'Contactos Biofinity' },
  { id: '010', dataItem: 'lentes', imgSrc: './img/gafas-evatik.jpeg', alt: 'lentes Evatik', title: 'Lentes Evatik' },
  { id: '011', dataItem: 'limpiadores', imgSrc: './img/humecsol.jpg', alt: 'humecsol', title: 'Humecsol Multiproposito' },
  { id: '012', dataItem: 'lentes', imgSrc: './img/gafas-2.jpeg', alt: 'lentes', title: 'Lentes' },
  { id: '013', dataItem: 'contactos', imgSrc: './img/contactos-air.jpeg', alt: 'contactos air optix aqua', title: 'Contactos Air Optix Aqua' },
  { id: '014', dataItem: 'limpiadores', imgSrc: './img/hydrosol.jpg', alt: 'hydrosol', title: 'Hydrosol Multiproposito' },
  { id: '015', dataItem: 'lentes', imgSrc: './img/gafas-1.jpeg', alt: 'mira flex lentes', title: 'Mira Flex Lentes' },
  { id: '016', dataItem: 'lentes', imgSrc: './img/gafas-optimun.png', alt: 'lentes Optimun', title: 'Lentes Optimun' }
]

const store = document.getElementById('store-items')
storeData.forEach(item => {
  const storeItem = document.createElement('div')
  storeItem.classList.add('col-6', 'col-sm-4', 'col-lg-3', 'mx-auto', 'my-3', 'store-item')
  storeItem.setAttribute('data-item', item.dataItem)
  
  storeItem.innerHTML = `
    <div id=${item.id} class="card">
      <div class="img-container">
        <img src=${item.imgSrc} class="card-img-top store-img" alt=${item.alt} />
      </div>
      <div class="card-body d-none d-md-block">
        <div class="card-text d-flex justify-content-between text-capitalize">
          <h5 id="store-item-name">${item.title}</h5>
        </div>
      </div>
    </div>
  `
  store.appendChild(storeItem)
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// let projectList = document.createElement("div")
// projectList.id = `project-list`
// projectData.map(item => {
//   let projectDiv = document.createElement("div")
//   let alt = `${item.title} logo`.replace(/\s/g, '-')
//   let src = (screen.width < 1200) ? `../assets/projects/${item.imgSml}` : `../assets/projects/${item.imgBig}`
//   projectDiv.id = item.id
//   projectDiv.key = item.id
//   projectDiv.classList.add('project')
//   projectDiv.innerHTML = `
//     <a href=${item.url} target="_blank" rel="noopener noreferrer">
//       <img class="project-logo" src=${src} width="auto" height="350" alt=${alt} />
//       <div class="project-info">
//         <h3>${item.title}</h3>
//         <p>${item.blurb}</p>
//         <code>${item.languages}</code>
//         <object><button class="project-btn">View Website</button></object>
//       </div>
//     </a>
//   `
//   }
//   projectList.appendChild(projectDiv)
// })
// document.getElementById('project-contents').appendChild(projectList)









// ````````~~~~~~~~~~~~~~~~~~~~~~~~~~~



// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="lentes">
//   <div id="001" class="card">
//     <div class="img-container">
//       <img src="./img/gafas-rosadas.jpg" class="card-img-top store-img" alt="imagen de gafas rosadas" />
//     </div>
//     <div class="card-body d-none d-md-block">
//       <div class="card-text d-flex justify-content-between text-capitalize">
//         <h5 id="store-item-name">Lentes Rosas</h5>
//       </div>
//     </div>
//   </div>
// </div>
// <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="limpiadores">
//   <div id="002" class="card ">
//     <div class="img-container">
//       <img src="./img/solution-oxi.jpg" class="card-img-top store-img" alt="imagen de solución-oxi">
// </div>
//       <div class="card-body d-none d-md-block">
//         <div class="card-text d-flex justify-content-between text-capitalize">
//           <h5 id="store-item-name">Multi Solución Oxi</h5>
//         </div>
//       </div>
//     </div>
//   </div>
//   <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="lentes">
//     <div id="003" class="card ">
//       <div class="img-container">
//         <img src="./img/gafas-nino.jpeg" class="card-img-top store-img" alt="imagen de gafas para los niños">
// </div>
//         <div class="card-body d-none d-md-block">
//           <div class="card-text d-flex justify-content-between text-capitalize">
//             <h5 id="store-item-name">Lentes para los niños</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//     <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="contactos">
//       <div id="004" class="card ">
//         <div class="img-container">
//           <img src="./img/contactos-avaira.jpeg" class="card-img-top store-img" alt="imagen de contactos avaira">
// </div>
//           <div class="card-body d-none d-md-block">
//             <div class="card-text d-flex justify-content-between text-capitalize">
//               <h5 id="store-item-name">Contactos Avaira</h5>
//             </div>
//           </div>
//         </div>
//       </div>
//       <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="limpiadores">
//         <div id="005" class="card ">
//           <div class="img-container">
//             <img src="./img/contactos-clean.jpeg" class="card-img-top store-img" alt="imagen de puremoist solución de contactos">
// </div>
//             <div class="card-body d-none d-md-block">
//               <div class="card-text d-flex justify-content-between text-capitalize">
//                 <h5 id="store-item-name">Solución de contactos</h5>
//               </div>
//             </div>
//           </div>
//         </div>
//         <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="limpiadores">
//           <div id="006" class="card ">
//             <div class="img-container">
//               <img src="./img/reflect-free.jpg" class="card-img-top store-img" alt="imagen de reflect limpiador">
// </div>
//               <div class="card-body d-none d-md-block">
//                 <div class="card-text d-flex justify-content-between text-capitalize">
//                   <h5 id="store-item-name">Reflect Free</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="lentes">
//             <div id="007" class="card ">
//               <div class="img-container">
//                 <img src="./img/gafas-3.jpeg" class="card-img-top store-img" alt="imagen de varios lentes">
// </div>
//                 <div class="card-body d-none d-md-block">
//                   <div class="card-text d-flex justify-content-between text-capitalize">
//                     <h5 id="store-item-name">Selección de lentes</h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="limpiadores">
//               <div id="008" class="card ">
//                 <div class="img-container">
//                   <img src="./img/contactos-clean2.jpeg" class="card-img-top store-img" alt="imagen de solución multipropósito">
// </div>
//                   <div class="card-body d-none d-md-block">
//                     <div class="card-text d-flex justify-content-between text-capitalize">
//                       <h5 id="store-item-name">Solución multipropósito</h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="contactos">
//                 <div id="009" class="card ">
//                   <div class="img-container">
//                     <img src="./img/contactos-biofinity.jpeg" class="card-img-top store-img" alt="imagen de contactos biofinity">
// </div>
//                     <div class="card-body d-none d-md-block">
//                       <div class="card-text d-flex justify-content-between text-capitalize">
//                         <h5 id="store-item-name">Contactos Biofinity</h5>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="lentes">
//                   <div id="010" class="card ">
//                     <div class="img-container">
//                       <img src="./img/gafas-evatik.jpeg" class="card-img-top store-img" alt="imagen de lentes Evatik">
// </div>
//                       <div class="card-body d-none d-md-block">
//                         <div class="card-text d-flex justify-content-between text-capitalize">
//                           <h5 id="store-item-name">Lentes Evatik</h5>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="limpiadores">
//                     <div id="011" class="card ">
//                       <div class="img-container">
//                         <img src="./img/humecsol.jpg" class="card-img-top store-img" alt="imagen de humecsol">
// </div>
//                         <div class="card-body d-none d-md-block">
//                           <div class="card-text d-flex justify-content-between text-capitalize">
//                             <h5 id="store-item-name">Humecsol Multiproposito</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="lentes">
//                       <div id="012" class="card ">
//                         <div class="img-container">
//                           <img src="./img/gafas-2.jpeg" class="card-img-top store-img" alt="imagen de lentes">
// </div>
//                           <div class="card-body d-none d-md-block">
//                             <div class="card-text d-flex justify-content-between text-capitalize">
//                               <h5 id="store-item-name">Lentes</h5>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="contactos">
//                         <div id="013" class="card ">
//                           <div class="img-container">
//                             <img src="./img/contactos-air.jpeg" class="card-img-top store-img" alt="imagen de contactos air optix aqua">
// </div>
//                             <div class="card-body d-none d-md-block">
//                               <div class="card-text d-flex justify-content-between text-capitalize">
//                                 <h5 id="store-item-name">Contactos Air Optix Aqua</h5>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="limpiadores">
//                           <div id="014" class="card ">
//                             <div class="img-container">
//                               <img src="./img/hydrosol.jpg" class="card-img-top store-img" alt="imagen de hydrosol">
// </div>
//                               <div class="card-body d-none d-md-block">
//                                 <div class="card-text d-flex justify-content-between text-capitalize">
//                                   <h5 id="store-item-name">Hydrosol Multiproposito</h5>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <!-- end of single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="lentes">
//                             <div id="015" class="card ">
//                               <div class="img-container">
//                                 <img src="./img/gafas-1.jpeg" class="card-img-top store-img" alt="imagen de mira flex lentes">
// </div>
//                                 <div class="card-body d-none d-md-block">
//                                   <div class="card-text d-flex justify-content-between text-capitalize">
//                                     <h5 id="store-item-name">Mira Flex Lentes</h5>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <!-- end of single item -->
// <!-- single item -->
// <div class="col-6 col-sm-4 col-lg-3 mx-auto my-3 store-item" data-item="lentes">
//                               <div id="016" class="card ">
//                                 <div class="img-container">
//                                   <img src="./img/gafas-optimun.png" class="card-img-top store-img" alt="imagen de lentes Optimun">
// </div>
//                                   <div class="card-body d-none d-md-block">
//                                     <div class="card-text d-flex justify-content-between text-capitalize">
//                                       <h5 id="store-item-name">Lentes Optimun</h5>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                               <!-- end of single item -->

