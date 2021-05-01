const img_src = [
  "./images/myPortfolio1.jpg",
  "./images/myPortfolio2.jpg",
  "./images/myPortfolio3.jpg",
  "./images/myPortfolio4.jpg",
  "./images/myPortfolio5.jpg",
  "./images/myPortfolio6.jpg",
  "./images/myPortfolio7.jpg",
  "./images/myPortfolio8.jpg",
  "./images/myPortfolio9.jpg",
  "./images/myPortfolio10.jpg",
];
let num = -1;

const slide_time = function () {
  if (num === 9) {
    num = 0;
  } else {
    num += 1;
  }
  document.getElementById("slide_img").src = img_src[num];
};

setInterval(slide_time, 1800);
