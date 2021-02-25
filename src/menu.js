const addHeader = (title) => {
  const h3 = document.createElement('h3');
  h3.textContent = title;
  h3.classList = 'has-text-info title is-4 has-text-centered mb-1'
  return h3
}

const addImg = (url) => {
  const img = document.createElement('img')
  img.setAttribute('src', url)
  img.classList = ''
  return img
}

const col = (title, url) => {
  const div = document.createElement('div')
  div.classList = 'column is-one-third'

  const header = addHeader(title)
  const img = addImg(url)

  div.appendChild(header)
  div.appendChild(img)
  return div
}

const section = () => {
  const section = document.createElement('section')
  section.classList = 'section columns is-flex-wrap-wrap'

  const i1 = col('Dish 1', 'https://s3.amazonaws.com/images.vive.travel/photos/26846/xlarge/16387949_756218197875438_3250135240576286528_n.jpg?1515688136')
  const i2 = col('Dish 2', 'https://s3.amazonaws.com/images.vive.travel/photos/26841/xlarge/15780908_737841989713059_6716260317016496246_n.jpg?1515688130')
  const i3 = col('Dish 3', 'https://s3.amazonaws.com/images.vive.travel/photos/26842/xlarge/15966284_746762125487712_2560254058512367341_n.jpg?1515688131')
  const i4 = col('Dish 4', 'https://s3.amazonaws.com/images.vive.travel/photos/26844/xlarge/16299316_760614417435816_3105713296761871100_n.jpg?1515688134')
  const i5 = col('Dish 5', 'https://s3.amazonaws.com/images.vive.travel/photos/26849/xlarge/16603119_760614424102482_4821679772647152332_n.jpg?1515688139')
  const i6 = col('Dish 6', 'https://s3.amazonaws.com/images.vive.travel/photos/26845/xlarge/16387271_756218127875445_5723444573201171685_n.jpg?1515688135')

  section.appendChild(i1)
  section.appendChild(i2)
  section.appendChild(i3)
  section.appendChild(i4)
  section.appendChild(i5)
  section.appendChild(i6)
  return section
}

const loadMenu = () => {
  const content = document.getElementById('content');
  const sect = section()

  const removed = content.lastChild;
  if (removed.classList[0] == 'section')
    removed.remove();

  content.appendChild(sect);
};

export default loadMenu;