var nav = document.querySelector('nav');
var btn = document.getElementById('btn')
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-cus-dark', 'shadow');
    } else {
        nav.classList.remove('bg-cus-dark', 'shadow');

    }
});

var toTopButton = document.getElementById("backToTopID");
toTopButton.style.display = "none";//by default should be hidden
document.querySelector('body').onscroll = function(){//whenever they scroll
  if (window.scrollY > 150)//if scroll is 150px from top
    toTopButton.style.display = "block";//if they scroll down, show
  else
    toTopButton.style.display = "none";//if they scroll up, hide
};