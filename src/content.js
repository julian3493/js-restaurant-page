const addBtn = (id, text) => {
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  btn.textContent = text;
  btn.className = 'button is-primary';
  return btn;
};

const addTabsCont = () => {
  const cont = document.createElement('div');
  const homeBtn = addBtn('home', 'HOME');
  const menuBtn = addBtn('menu', 'MENU');
  const contactBtn = addBtn('contact', 'CONTACT');
  cont.appendChild(homeBtn);
  cont.appendChild(menuBtn);
  cont.appendChild(contactBtn);
  return cont;
};

const addNav = () => {
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'nav');
  nav.className = 'navbar tabs is-justify-content-center';
  const contTabs = addTabsCont();
  nav.appendChild(contTabs);
  return nav;
};

const layout = () => {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  header.className = 'has-text-centered';
  const title = document.createElement('h1');
  title.textContent = 'Restaurant';
  title.className = 'title is-1 mb-6 mt-6 main-title';
  const navbar = addNav();
  header.appendChild(title);
  content.appendChild(header);
  content.appendChild(navbar);
};

export default layout;