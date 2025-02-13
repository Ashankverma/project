
const sliders = document.querySelectorAll('.slider-container .slides');
const slideCount = document.querySelector('.slider-container .slides').children.length;

let currentIndex = 0;
let intervalTime = 3000; // Auto-slide every 3 seconds

function updateSlidePosition() {
    sliders.forEach((slides) => {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
    
}

// Start auto-slide
setInterval(nextSlide, intervalTime);


// -----------------------------------------------------------------


document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        let answer = item.nextElementSibling;
        let plusSign = item.querySelector('.plus');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            plusSign.textContent = '+';
        } else {
            answer.style.display = 'block';
            plusSign.textContent = '−';
        }
    });
});

// popup----------------------------------------------------

window.onload = function() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
};
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};

btnpopup.onclick = function() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
};
function openPopup(){
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// -----------------------------------------------------------

function btnSidebar(){
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-250px" || sidebar.style.left === "") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }

}