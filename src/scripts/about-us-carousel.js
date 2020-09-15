let images = document.querySelectorAll('.gallery__image');
let arrows = document.querySelector('.arrows__container');

arrows.addEventListener('click', (e) => {
  let clickedArrow = e.target;
  let srcNum

  images.forEach((el, i) => {
    if(el.classList.contains('gallery__image_active')){
      srcNum = el.getAttribute('src').[14]
      srcNum = parseInt(srcNum, 10)

      if (clickedArrow.tagName === 'SPAN') {

        if (clickedArrow.classList.contains('arrows__arrow_right')) {

          if (srcNum === 0) {
            images[0].setAttribute('src', `images/gallery${srcNum + 1}.jpg`)
          } else if (srcNum === images.length - 1) {
            images[0].setAttribute('src', `images/gallery${0}.jpg`)
          } else {
            images[0].setAttribute('src', `images/gallery${srcNum + 1}.jpg`)
          }

        } else {

          if (srcNum === 0) {
            images[0].setAttribute('src', `images/gallery${images.length - 1}.jpg`)
          } else {
            images[0].setAttribute('src', `images/gallery${srcNum - 1}.jpg`)
          }

        }
      }
    }
  });
})
