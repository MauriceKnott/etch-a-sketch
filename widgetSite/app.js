let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500);
}



const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
        console.log(link);
    }
})

let darkToggle = document.querySelector('#darkToggle');
const navDark = document.querySelector('navMenu');

darkToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');


});



$(document).ready(function () {
    /* Ex1 */
    $(".Banner1").delay(1000).fadeIn(500);
    $(".BannerBorder,.BannerBorderLine").delay(1000).fadeIn(500);
    $(".BannerHolder").delay(2500).fadeIn(1000);
    $(".Sales").delay(3500).fadeIn(1000);
    $(".Biggest").delay(4500).fadeIn(1000);
    $(".ShopNow").delay(5500).fadeIn(1000);
});

$(".Banner1").click(function () {
    $(".BannerBorder,.BannerBorderLine,.BannerHolder,.Sales,.Biggest,.ShopNow").delay(0).fadeOut(500);
    $(".BannerBorder,.BannerBorderLine").delay(1000).fadeIn(500);
    $(".BannerHolder").delay(2500).fadeIn(1000);
    $(".Sales").delay(3500).fadeIn(1000);
    $(".Biggest").delay(4500).fadeIn(1000);
    $(".ShopNow").delay(5500).fadeIn(1000);



});


