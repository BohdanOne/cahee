const form = document.querySelector('.subscribe__form');
const input = document.querySelector('.subscribe__input');
const text = document.querySelector('.section__title--subscribe');

export default () => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    text.textContent = `${input.value} subscribed!`
    form.remove();
  });
};