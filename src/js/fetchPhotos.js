const imgUrl = 'https://source.unsplash.com/570x400/?fruit';

const button = document.querySelector('.button--gallery');

const gallery = document.querySelector('.gallery--fetched');

export default () => {
  button.addEventListener('click', () => {
    gallery.appendChild(createImgContainer());
  });
}

function createImgContainer(col) {
  const container = document.createElement('div');
  container.classList.add('gallery__img-container');
  container.innerHTML = `<img class="gallery__img" src="${imgUrl}" alt="">`;
  return container;
}