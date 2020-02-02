const PADDING_TOP = 110;

const navItems = document.querySelectorAll('.nav-item');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

let windowOffset = window.scrollY - PADDING_TOP;
let sectionOffsets = grabSectionsOffsets();

window.addEventListener('scroll', () => {
  windowOffset = window.scrollY;
  sectionOffsets = grabSectionsOffsets();
  highlightCurrentLink(windowOffset);
});

function grabSectionsOffsets() {
  const offsets = [];
  sections.forEach(section => {
    offsets.push({
      top: section.offsetTop,
      bottom: (section.offsetTop + section.offsetHeight),
      id: section.id
    });
  });
  return offsets;
};

export function highlightCurrentLink(offset) {
  sectionOffsets.forEach(section => {
    if (section.top <= offset + PADDING_TOP && offset < section.bottom) {
      navItems.forEach(item => addActiveClassToCurrentSectionLink(item, section));
    }
  });
};

function addActiveClassToCurrentSectionLink(link, section) {
  if(link.textContent.trim() === section.id) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
};

export function scrollTo() {
  links.forEach(link => {
    const scrollTarget = document.querySelector(`${link.getAttribute('href')}`);
    link.addEventListener('click', event => {
      event.preventDefault();
      smoothScroll(scrollTarget, 500)
    });
  });
};

export function smoothScroll(scrollTarget, duration)  {
  const targetId = scrollTarget.id;
  const targetSection = sectionOffsets.find(section => section.id === targetId);
  const startPosition = windowOffset;
  const distance = targetSection.top - PADDING_TOP - startPosition;

  let startTime = null;

  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d/2;
	  if (t < 1) return c/2*t*t*t + b;
	  t -= 2;
    return c/2*(t*t*t + 2) + b;
  }

  requestAnimationFrame(animation);
};

