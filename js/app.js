/***********************************************/
/* This file app.js was written by Shaun Gedye */
/***********************************************/

function toggleText(content) {
  if (content.classList.contains('hide')) {
    content.classList.remove('hide');
    content.classList.add('show');
  } else if (content.classList.contains('show')) {
    content.classList.remove('show');
    content.classList.add('hide');
  }
}
function activeButton(btnPressed) {
  const buttons = document.getElementById('btn-filters');
  for (let i=0; i<buttons.childElementCount; i++) {
    buttons.children[i].classList.remove('active');
  }
  btnPressed.classList.add('active');
}
function filterStore(selection) {
  const items = document.querySelectorAll('.store-item');
  items.forEach(item => {
    item.classList.add('animated')
    setTimeout(() => { item.classList.add('zoomOut') }, 0)
    setTimeout(() => {
      item.classList.replace('zoomOut', 'zoomIn')
    }, 500)
  });
  if (selection === "all") {
    items.forEach(item => {
      setTimeout(() => { item.classList.remove('hide') }, 500)
    })
  } else {
    items.forEach(item => {
      if (item.dataset.item === selection) {
        setTimeout(() => { item.classList.remove('hide') }, 500)
      } else {
        setTimeout(() => { item.classList.add('hide') }, 500)
      }
    })
  }
}
/* Event Listeners */
function eventListeners() {
  const articles = document.querySelectorAll('.article');
  articles.forEach(article => {
    article.addEventListener('click', (event) => {
      let articleToToggle = null;
      if (event.target.classList.contains('article')) {
        articleToToggle = event.target;
      } else if (event.target.parentElement.classList.contains('article')) {
        articleToToggle = event.target.parentElement;
      } else if (event.target.parentElement.parentElement.classList.contains('article')) {
        articleToToggle = event.target.parentElement.parentElement;
      }
      toggleText(articleToToggle.children[2]);
    });
  });
  const filterBtn = document.querySelectorAll('.filter-btn');
  filterBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
      activeButton(event.target);
      filterStore(event.target.dataset.filter);
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});