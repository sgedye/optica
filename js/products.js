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
  { id: '001', dataItem: 'lentes',      imgSrc: 'gafas-rosadas.jpg',        alt: 'gafas rosadas',                   title: 'Lentes Rosas' },
  { id: '002', dataItem: 'limpiadores', imgSrc: 'solution-oxi.jpg',         alt: 'solución-oxi',                    title: 'Multi Solución Oxi' },
  { id: '003', dataItem: 'lentes',      imgSrc: 'gafas-nino.jpeg',          alt: 'gafas para los niños',            title: 'Lentes para los niños' },
  { id: '004', dataItem: 'contactos',   imgSrc: 'contactos-avaira.jpeg',    alt: 'contactos avaira',                title: 'Contactos Avaira' },
  { id: '005', dataItem: 'limpiadores', imgSrc: 'contactos-clean.jpeg',     alt: 'puremoist solución de contactos', title: 'Solución de contactos' },
  { id: '006', dataItem: 'limpiadores', imgSrc: 'reflect-free.jpg',         alt: 'reflect limpiador',               title: 'Reflect Free' },
  { id: '007', dataItem: 'lentes',      imgSrc: 'gafas-3.jpeg',             alt: 'varios lentes',                   title: 'Selección de lentes' },
  { id: '008', dataItem: 'limpiadores', imgSrc: 'contactos-clean2.jpeg',    alt: 'solución multipropósito',         title: 'Solución multipropósito' },
  { id: '009', dataItem: 'contactos',   imgSrc: 'contactos-biofinity.jpeg', alt: 'contactos biofinity',             title: 'Contactos Biofinity' },
  { id: '010', dataItem: 'lentes',      imgSrc: 'gafas-evatik.jpeg',        alt: 'lentes Evatik',                   title: 'Lentes Evatik' },
  { id: '011', dataItem: 'limpiadores', imgSrc: 'humecsol.jpg',             alt: 'humecsol',                        title: 'Humecsol Multiproposito' },
  { id: '012', dataItem: 'lentes',      imgSrc: 'gafas-2.jpeg',             alt: 'lentes',                          title: 'Lentes' },
  { id: '013', dataItem: 'contactos',   imgSrc: 'contactos-air.jpeg',       alt: 'contactos air optix aqua',        title: 'Contactos Air Optix Aqua' },
  { id: '014', dataItem: 'limpiadores', imgSrc: 'hydrosol.jpg',             alt: 'hydrosol',                        title: 'Hydrosol Multiproposito' },
  { id: '015', dataItem: 'lentes',      imgSrc: 'gafas-1.jpeg',             alt: 'mira flex lentes',                title: 'Mira Flex Lentes' },
  { id: '016', dataItem: 'lentes',      imgSrc: 'gafas-optimun.png',        alt: 'lentes Optimun',                  title: 'Lentes Optimun' }
]

const store = document.getElementById('store-items')
storeData.forEach(item => {
  const storeItem = document.createElement('div')
  storeItem.classList.add('col-6', 'col-sm-4', 'col-lg-3', 'mx-auto', 'my-3', 'store-item')
  storeItem.setAttribute('data-item', item.dataItem)
  const imgSource = `./img/store/${item.imgSrc}`
  storeItem.innerHTML = `
    <div id=${item.id} class="card">
      <div class="img-container">
        <img src=${imgSource} class="card-img-top store-img" alt=${item.alt} />
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