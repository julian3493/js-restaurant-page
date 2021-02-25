const loadContact = () => {
  const content = document.getElementById('content');
  const header = document.createElement('h2');
  header.className = 'delete-this'
  header.textContent = 'Contact title';

  const removed = content.lastChild;
  if (removed.className == 'section')
    removed.remove(); 

  content.appendChild(header);
};

export default loadContact;