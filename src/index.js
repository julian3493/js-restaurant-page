import layout from './content';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const addBtnEvents = () => {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);
};

const init = () => {
  layout();
  addBtnEvents();
}

init();
