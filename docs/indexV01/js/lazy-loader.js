const images = document.querySelectorAll('img');


const lazyImage = (entries, observer) => {
  entries
  .filter(entry => entry.isIntersecting)
  .forEach((entry) => {
    const img = entry.target;
    const src = img.getAttribute('data-lazy');
    img.classList.add('show');
    img.setAttribute('src', src);
    observer.disconnect();
  })
}


images.forEach((img) => {

  const observer = new IntersectionObserver(lazyImage);
  observer.observe(img);
});

