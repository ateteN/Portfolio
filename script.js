window.onscroll = () => {
    let header = document.querySelector('.header');
    console.log(window.scrollY); 
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};
