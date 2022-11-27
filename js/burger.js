var burger = document.querySelector('.burger');
var list = document.querySelector('.header__nav');
var body = document.querySelector('body');


burger.onclick = function(){
    list.classList.toggle("active");
    body.classList.toggle("fixed-page");
    burger.classList.toggle("active");
}