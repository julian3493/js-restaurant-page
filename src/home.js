const addHeader = (title) => {
  const h2 = document.createElement('h2');
  h2.textContent = title;
  h2.classList = 'has-text-info title is-2 has-text-centered mb-6'
  return h2
}

const parag = (text) => {
  const p = document.createElement('p')
  p.textContent = text
  p.classList = 'subtitle has-text-centered'
  return p
}

const section = () => {
  const section = document.createElement('section')
  section.classList = 'section'

  const header = addHeader('Enjoy our japanese food')
  const p = parag('Japanese Food Restaurant. Sushi cocktails - Wok - Teppanyaki - Ceviches Etc. A new place where you can enjoy the best dishes and flavors.')
  
  section.appendChild(header)
  section.appendChild(p)
  return section
}

const loadHome = () => {
  const content = document.getElementById('content');
  const sec = section();
  const removed = content.lastChild;

  if (removed.className == 'delete-this')
    removed.remove();
   
  content.appendChild(sec);
};

export default loadHome;