var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image
const interval = 3000; // duration (speed) of the slide

function changeSlide(n) {
    // Reset all images and dots
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].classList.remove('active');
    }

    // Update current image index
    currentImg = (n !== undefined) ? n : (currentImg + 1) % imgs.length;

    // Show the new current image and update active dot
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].classList.add('active');
}

var timer = setInterval(changeSlide, interval);

// Function to manually change the slide (when dot is clicked)
function manualChange(n) {
    clearInterval(timer); // Stop automatic slideshow
    changeSlide(n); // Change to selected image
    timer = setInterval(changeSlide, interval); // Restart automatic slideshow
}

// Initialize the first slide
changeSlide(currentImg);
