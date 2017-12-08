function randImg() {
  let imgIndex = Math.floor(Math.random() * 4 + 1);
  document.body.style.backgroundImage = `url(${imgIndex}.jpg)`;
}

setInterval(randImg, 2000);
