const addHeader = (title) => {
  const h2 = document.createElement('h2');
  h2.textContent = title;
  h2.classList = 'has-text-info title is-3 has-text-centered mb-6'
  return h2
}

const parag = (text) => {
  const p = document.createElement('p')
  p.textContent = text
  p.classList = 'subtitle has-text-centered'
  return p
}

const col = (title, subtitle) => {
  const div = document.createElement('div')
  div.classList = 'column'

  const header = addHeader(title)
  const p = parag(subtitle)

  div.appendChild(header)
  div.appendChild(p)
  return div
}

const section = () => {
  const section = document.createElement('section')
  section.classList = 'section columns'

  const d1 = col('Contact', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla diam in mauris venenatis, in facilisis sapien sollicitudin. Duis risus erat, faucibus vel consequat a, volutpat mollis arcu.')
  const d2 = col('Loaction', 'Pellentesque laoreet diam vitae rhoncus dignissim. Nullam sed maximus diam. Duis vitae accumsan urna, lacinia interdum tellus. Aliquam volutpat imperdiet iaculis.')
  section.appendChild(d1)
  section.appendChild(d2)
  return section
}

const loadContact = () => {
  const content = document.getElementById('content');
  const sect = section()

  const removed = content.lastChild;
  if (removed.classList[0] == 'section')
    removed.remove();

  content.appendChild(sect);
};

export default loadContact;