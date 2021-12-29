var mybutton = document.getElementById('go-up');

window.onscroll = function () {

    if (window.pageYOffset>=400) {

        mybutton.style.display = ('block')
        
    }else{
        mybutton.style.display = ('none')
    }
    
};
mybutton.onclick = function () {

    window.scrollTo(0,0)
    
};

var header = document.querySelector('header');

window.addEventListener('scroll',function () {

    header.classList.toggle('sticky',window.scrollY>0)
    
});

var tooogglemenu = document.querySelector('.toggle');
var menu = document.querySelector('.menu');

function togglemenu() {

    tooogglemenu.classList.toggle('active')
    menu.classList.toggle('active')
}
