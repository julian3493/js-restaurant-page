(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("button");return n.setAttribute("id",e),n.textContent=t,n.className="button is-primary",n},t=()=>{const e=document.getElementById("content"),t=(()=>{const e=document.createElement("section");e.classList="section";const t=(e=>{const t=document.createElement("h2");return t.textContent="Enjoy our japanese food",t.classList="has-text-info title is-2 has-text-centered mb-6",t})(),n=(e=>{const t=document.createElement("p");return t.textContent="Japanese Food Restaurant. Sushi cocktails - Wok - Teppanyaki - Ceviches Etc. A new place where you can enjoy the best dishes and flavors.",t.classList="subtitle has-text-centered",t})();return e.appendChild(t),e.appendChild(n),e})(),n=e.lastChild;"section"===n.classList[0]&&n.remove(),e.appendChild(t)},n=(e,t)=>{const n=document.createElement("div");n.classList="column is-one-third";const s=(e=>{const t=document.createElement("h3");return t.textContent=e,t.classList="has-text-info title is-4 has-text-centered mb-1",t})(e),a=(e=>{const t=document.createElement("img");return t.setAttribute("src",e),t.classList="",t})(t);return n.appendChild(s),n.appendChild(a),n},s=()=>{const e=document.getElementById("content"),t=(()=>{const e=document.createElement("section");e.classList="section columns is-flex-wrap-wrap";const t=n("Dish 1","https://s3.amazonaws.com/images.vive.travel/photos/26846/xlarge/16387949_756218197875438_3250135240576286528_n.jpg?1515688136"),s=n("Dish 2","https://s3.amazonaws.com/images.vive.travel/photos/26841/xlarge/15780908_737841989713059_6716260317016496246_n.jpg?1515688130"),a=n("Dish 3","https://s3.amazonaws.com/images.vive.travel/photos/26842/xlarge/15966284_746762125487712_2560254058512367341_n.jpg?1515688131"),i=n("Dish 4","https://s3.amazonaws.com/images.vive.travel/photos/26844/xlarge/16299316_760614417435816_3105713296761871100_n.jpg?1515688134"),c=n("Dish 5","https://s3.amazonaws.com/images.vive.travel/photos/26849/xlarge/16603119_760614424102482_4821679772647152332_n.jpg?1515688139"),o=n("Dish 6","https://s3.amazonaws.com/images.vive.travel/photos/26845/xlarge/16387271_756218127875445_5723444573201171685_n.jpg?1515688135");return e.appendChild(t),e.appendChild(s),e.appendChild(a),e.appendChild(i),e.appendChild(c),e.appendChild(o),e})(),s=e.lastChild;"section"===s.classList[0]&&s.remove(),e.appendChild(t)},a=(e,t)=>{const n=document.createElement("div");n.classList="column";const s=(e=>{const t=document.createElement("h2");return t.textContent=e,t.classList="has-text-info title is-3 has-text-centered mb-6",t})(e),a=(e=>{const t=document.createElement("p");return t.textContent=e,t.classList="subtitle has-text-centered",t})(t);return n.appendChild(s),n.appendChild(a),n},i=()=>{const e=document.getElementById("content"),t=(()=>{const e=document.createElement("section");e.classList="section columns";const t=a("Contact","Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla diam in mauris venenatis, in facilisis sapien sollicitudin. Duis risus erat, faucibus vel consequat a, volutpat mollis arcu."),n=a("Loaction","Pellentesque laoreet diam vitae rhoncus dignissim. Nullam sed maximus diam. Duis vitae accumsan urna, lacinia interdum tellus. Aliquam volutpat imperdiet iaculis.");return e.appendChild(t),e.appendChild(n),e})(),n=e.lastChild;"section"===n.classList[0]&&n.remove(),e.appendChild(t)};(()=>{const t=document.querySelector("#content"),n=document.createElement("header");n.setAttribute("id","header"),n.className="has-text-centered";const s=document.createElement("h1");s.textContent="Restaurant",s.className="title is-1 mb-6 mt-6";const a=(()=>{const t=document.createElement("nav");t.setAttribute("id","nav"),t.className="navbar tabs is-justify-content-center";const n=(()=>{const t=document.createElement("div"),n=e("home","HOME"),s=e("menu","MENU"),a=e("contact","CONTACT");return t.appendChild(n),t.appendChild(s),t.appendChild(a),t})();return t.appendChild(n),t})();n.appendChild(s),t.appendChild(n),t.appendChild(a)})(),t(),(()=>{const e=document.getElementById("home"),n=document.getElementById("menu"),a=document.getElementById("contact");e.addEventListener("click",t),n.addEventListener("click",s),a.addEventListener("click",i)})()})();