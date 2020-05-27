/*******************************************************/
/* This file corporativo.js was written by Shaun Gedye */
/*******************************************************/

{/* <div class="col-6 col-sm-4 col-lg-2 mx-auto my-3">
  <div class="card corp-card">
    <a href="./corporativos/2016-17.pdf" target="_blank">
      <div class="img-container">
        <img src="./img/balance1.jpg" class="card-img-top" alt="imagen de documento" />
      </div>
      <div class="card-body corp-card-body">
        <h5 class="corp-name">2016 - 2017</h5>
      </div>
    </a>
  </div>
</div> */}

const corporativoData = [
  { id: '001', src: './corporativos/2016-17.pdf', title: '2016 - 2017' },
  { id: '002', src: './corporativos/2015-16.pdf', title: '2015 - 2016' },
  { id: '003', src: './corporativos/2013-14.pdf', title: '2013 - 2014' },
  { id: '004', src: './corporativos/2012-13.pdf', title: '2012 - 2013' },
  { id: '005', src: './corporativos/2011-12.pdf', title: '2011 - 2012' },
  { id: '006', src: './corporativos/2010-11.pdf', title: '2010 - 2011' }
]

const corporativos = document.getElementById('corp-items')
corporativoData.forEach(item => {
  const corporativo = document.createElement('div')
  corporativo.classList.add('col-6', 'col-sm-4', 'col-lg-2', 'mx-auto', 'my-3')  
  corporativo.innerHTML = `
    <div class="card corp-card">
      <a href=${item.src} target="_blank" rel="noopener noreferrer">
        <div class="img-container">
          <img src="./img/balance1.jpg" class="card-img-top" alt="imagen de documento" />
        </div>
        <div class="card-body corp-card-body">
          <h5 class="corp-name">${item.title}</h5>
        </div>
      </a>
    </div>
  `
  corporativos.appendChild(corporativo)
})