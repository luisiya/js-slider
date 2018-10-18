// const slides = document.querySelectorAll('#slides .slide');
// const dots = document.querySelectorAll('#dotsrty .dot');
// let currentSlide = 0;
// let slideInterval = setInterval(nextSlide,3000);
//
//
// function nextSlide() {
//
//     slides[currentSlide].className = 'slide';
//     dots[currentSlide].className = 'dot';
//     currentSlide = (currentSlide+1)%slides.length;
//     dots[currentSlide].className = 'dot dotShowing';
//     slides[currentSlide].className = 'slide showing';
// }
//
//
// function selectSlider(n){
//     slides.forEach(item =>{
//             item.classList.remove('showing')
//         }
//     );
//     dots.forEach(item =>{
//             item.classList.remove('dotShowing')
//         }
//     );
//     document.getElementById(n).className = 'slide showing';
//     document.getElementById(`indicator_${n}`).className = 'dot dotShowing';
//     window.clearInterval(slideInterval);
//     currentSlide = Number(n.slice(5,n.length))-1;
//     slideInterval = setInterval(nextSlide,3000);
//    }
