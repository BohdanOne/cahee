import { smoothScroll } from './navbar';

export default () => {
  document.querySelector('.mouse-img').addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    smoothScroll(aboutSection, 500);
  });
};