import { highlightCurrentLink, scrollTo } from './navbar';
import mouseImgScroll from './mouseImgScroll';
import footerLogoScroll from './footerLogoScroll';
import fetchPhotos from './fetchPhotos';
import submitEmail from './submitEmail';

export default () => {
  highlightCurrentLink();
  scrollTo();
  footerLogoScroll();
  mouseImgScroll();
  fetchPhotos();
  submitEmail();
};