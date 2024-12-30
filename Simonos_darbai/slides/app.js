let slideIndex = 0;
const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

if(slides.length > 0) {
    slides[slideIndex].classList.add('active');
    dots[slideIndex].style.opacity = '1';
    
}

function showSlides(slideIndex){
    slides.forEach((slide, i) =>{
        slide.classList.remove('active');
        dots[i].style.opacity = '0.3';
    });
    slides[slideIndex].classList.add('active');
    dots[slideIndex].style.opacity = '1';
   
}

let intervalID = setInterval(function(){
    if(slideIndex >= slides.length){
        slideIndex = 0;
    }
    showSlides(slideIndex);
    slideIndex++;
}, 3000 );

dots.forEach((dot, i) =>{
    dot.addEventListener('click', () =>{
        slideIndex = i;
        showSlides(slideIndex);
    })
})

prev.addEventListener('click', () =>{
    clearInterval(intervalID)
    slideIndex--;
    if(slideIndex < 0){
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex)
});

next.addEventListener('click', () =>{
    clearInterval(intervalID)
    slideIndex++;
    if(slideIndex >= slides.length){
        slideIndex = 0;
    }
    showSlides(slideIndex)
})