import layout from './content';
import loadHome from './home';
import loadContact from './contact';

const addBtnEvents = () => {
  const homeBtn = document.getElementById('home');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', loadHome);
  contactBtn.addEventListener('click', loadContact);
};

const init = () => {
  layout();
  addBtnEvents();
}

init();
