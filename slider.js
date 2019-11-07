const image = document.querySelector('#toSlide');
const slider = document.querySelector('.slider-nav');

const imageLinks = [
  "https://res.cloudinary.com/rumplestiltskin/image/upload/v1573045460/stay-busy/laptop_v2v5bg.png",
  "https://res.cloudinary.com/rumplestiltskin/image/upload/v1573045456/stay-busy/nxt_trkgde.png",
  "https://res.cloudinary.com/rumplestiltskin/image/upload/v1573045431/stay-busy/cross_rhcd7u.png",
  "https://res.cloudinary.com/rumplestiltskin/image/upload/v1573045457/stay-busy/elipse_d85wwe.png"
]


slider.addEventListener('click', (e) => {
  let url, indx;
  url = image.src;
  indx = imageLinks.indexOf(url);
  if (e.target.classList.contains('fa-arrow-left')) {
    if (indx >= 1) {
      image.src = imageLinks[indx - 1];
    } else {
      image.src = imageLinks[imageLinks.length - 1];
    }
  } else if (e.target.classList.contains('fa-arrow-right')) {
    if (indx < imageLinks.length - 1) {
      image.src = imageLinks[indx + 1];
    } else {
      image.src = imageLinks[0]
    }
  }
})
