// paralaxs.js

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// ----------------------------------

// scroll efect
AOS.init();

// headerburger

let header__burger = document.querySelector('.header__burger');
let list = document.querySelector('.list');
let back = document.querySelector('body');
let button = document.querySelector('.button');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    list.classList.toggle('active');
    
}

 button.onclick = function () {
    button.classList.remove('active');
}

// info more

let info_more = document.querySelector('.info_more');
let block_info_more = document.querySelector('.block_info_more');
let block_info_more_title = document.querySelector('.block_info_more_title');
// 2
let info_more1 = document.querySelector('.info_more1');
let block_info_more1 = document.querySelector('.block_info_more1');
let block_info_more_title1 = document.querySelector('.block_info_more_title1');
// 3
let info_more2 = document.querySelector('.info_more2');
let block_info_more2 = document.querySelector('.block_info_more2');
let block_info_more_title2 = document.querySelector('.block_info_more_title2');
// 4
let info_more3 = document.querySelector('.info_more3');
let block_info_more3 = document.querySelector('.block_info_more3');
let block_info_more_title3 = document.querySelector('.block_info_more_title3');



// 1
info_more.onclick = function(){
    block_info_more_title.classList.toggle('active');
    block_info_more.classList.toggle('active');
  
}

// 2
info_more1.onclick = function(){
    block_info_more_title1.classList.toggle('active');
    block_info_more1.classList.toggle('active');
    
}

// 3
info_more2.onclick = function(){
    block_info_more_title2.classList.toggle('active');
    block_info_more2.classList.toggle('active');
    
}

// 4
info_more3.onclick = function(){
    block_info_more_title3.classList.toggle('active');
    block_info_more3.classList.toggle('active');
    
}









