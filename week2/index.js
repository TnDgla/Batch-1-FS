
const img = document.querySelectorAll('.slider');
const dots = document.querySelectorAll('.dot');

let currentImg=0
const interval = 3000;

function changeSlider(n){
    for(let i =0;i<imgs.length;i++){
        imgs[i].style.opacity=0;
        dots[i].className= dots[i].className.replace('active','')
    }

    currentImg=n

    imgs[currentImg].style.opacity =1;
    dots[currentImg].className+='active';

    if(n!=undefined){
        clearInterval(timer)
        timer = setInterval(changeSlider,interval);
        currentImg=n;
    }
}