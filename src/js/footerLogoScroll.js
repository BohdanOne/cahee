import { smoothScroll } from './navbar';

export default () => {
  document.querySelector('.footer__text--logo').addEventListener('click', () => {
    const home = document.getElementById('home');
    smoothScroll(home, 500);
  });
};