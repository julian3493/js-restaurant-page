const loadHome = () => {
  const content = document.getElementById('content');
  const header = document.createElement('h2');
  header.className = 'delete-this'
  header.textContent = 'Home title'

  const removed = content.lastChild;
  if (removed.className == 'delete-this')
    removed.remove(); 

  content.appendChild(header);
};

export default loadHome;