import SlideNav from './slide.js';

const slide = new SlideNav('.slide', '.depoimentos-img');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
