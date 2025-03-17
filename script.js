window.onscroll = () => {
    let header = document.querySelector('.header');
    console.log(window.scrollY); 
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section"); 
    let navLinks = document.querySelectorAll(".navbar a"); 

    let scrollY = window.scrollY + 200; 

    sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});

const darkModeIcon = document.getElementById('darkMode-icon');
darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
