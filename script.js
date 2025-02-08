const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlidePosition();
});




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

