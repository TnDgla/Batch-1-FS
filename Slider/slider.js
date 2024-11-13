var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');

var current = 0;
const interval = 3000;


function changeSlider(n){
    for(var i =0;i<imgs.length;i++){
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace('active','');
    }

    current = n;
    imgs[current].style.opacity = 1;
    dots[current].className += ' active';
}

let timer = setInterval(()=>{
    changeSlider(current);
    current = (current+1)% imgs.length;
},interval)