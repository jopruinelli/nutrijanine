/* ================================ */
/*  Fade and Slide Animation        */
/* ================================ */
    const observers = document.querySelectorAll('.fade-slide');
    const onScroll = () => {
      observers.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('load', onScroll);
    window.addEventListener('scroll', onScroll);