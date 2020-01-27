/***********************************************/
/* This file app.js was written by Shaun Gedye */
/***********************************************/

function activeButton(btnPressed) {
  this.buttons = document.getElementById('btn-filters');
  for (let i=0; i<this.buttons.childElementCount; i++) {
    this.buttons.children[i].classList.remove('active');
  }
  btnPressed.classList.add('active');
}
function filterStore(selection) {
  this.store = document.getElementById('store-items');
  if (selection === "all") {
    for (let i = 0; i<this.store.childElementCount; i++) {
      this.store.children[i].classList.remove('hide');
      this.store.children[i].classList.add('show');
    }
  } else {
    for (let i = 0; i<this.store.childElementCount; i++) {
      if (this.store.children[i].dataset.item === selection) {
        this.store.children[i].classList.remove('hide');
        this.store.children[i].classList.add('show');
      } else {
        this.store.children[i].classList.remove('show');
        this.store.children[i].classList.add('hide'); 
      }
    }
  }
}
/* Event Listeners */
function eventListeners() {
  const filterBtn = document.querySelectorAll('.filter-btn');
  filterBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      activeButton(event.target);
      filterStore(event.target.dataset.filter);
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});