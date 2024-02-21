const navLinks = document.querySelector('.nav-links')
    function onToggleMenu(e) {
        e.name = e.name === 'menu' ? 'close' : 'menu'
        navLinks.classList.toggle('top-[9%]')

    }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dot = document.getElementsByClassName('dot');
    
    if (n > slides.length) {
        slideIndeex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace('active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dot[slideIndex - 1].className += 'active';

    
    
}


// var firstIndex = 0;

// function automaticSlide() {
//     setTimeout(automaticSlide, 2000);
//     var pics;
//     const img = document.querySelectorAll('img');
//     for(pics = 0; pics < img.length; pics++) {
//         img[pics].style.display="none";
//     }
//     firstIndex++;
//     if(firstIndex > img.length) {
//         firstIndex = 1;
//     }
//     img[firstIndex -1].style.display="block";
// }
// automaticSlide();