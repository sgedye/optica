function toggleText(t){t.classList.contains("hide")?(t.classList.remove("hide"),t.classList.add("show")):t.classList.contains("show")&&(t.classList.remove("show"),t.classList.add("hide"))}function activeButton(t){const e=document.getElementById("btn-filters");for(let t=0;t<e.childElementCount;t++)e.children[t].classList.remove("active");t.classList.add("active")}function filterStore(t){const e=document.querySelectorAll(".store-item");e.forEach(t=>{t.classList.add("animated"),setTimeout(()=>{t.classList.add("zoomOut")},0),setTimeout(()=>{t.classList.replace("zoomOut","zoomIn")},500)}),"all"===t?e.forEach(t=>{setTimeout(()=>{t.classList.remove("hide")},500)}):e.forEach(e=>{e.dataset.item===t?setTimeout(()=>{e.classList.remove("hide")},500):setTimeout(()=>{e.classList.add("hide")},500)})}function eventListeners(){document.querySelectorAll(".article").forEach(t=>{t.addEventListener("click",t=>{let e=null;t.target.classList.contains("article")?e=t.target:t.target.parentElement.classList.contains("article")?e=t.target.parentElement:t.target.parentElement.parentElement.classList.contains("article")&&(e=t.target.parentElement.parentElement),toggleText(e.children[2])})}),document.querySelectorAll(".filter-btn").forEach(t=>{t.addEventListener("click",t=>{activeButton(t.target),filterStore(t.target.dataset.filter)})})}document.addEventListener("DOMContentLoaded",()=>{eventListeners()});