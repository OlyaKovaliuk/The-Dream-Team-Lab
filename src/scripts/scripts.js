let anchors = document.querySelectorAll('.navbar__link')

for (let key of anchors) {
  key.addEventListener('click', function(e){
    e.preventDefault();
    let anchorId = this.getAttribute('href');
    document.querySelector(anchorId).scrollIntoView({
      behavior: 'smooth', block: 'start'
    })
  })
}
