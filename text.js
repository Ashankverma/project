const slides = document.querySelectorAll(".slide")
// console.log(slides);
var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = '${index *100}px'

    }
)



const goPrev = () =>{
    counter--
    // alert()
    slideImage()
}

const goNext = () =>{
    counter++
    // alert()
    slideImage()
}

const slideImage = () =>{
    slider.forEach(
        (slide)=>{
            slide.style.transform ='translateX(-${counter * 100}px)'
        }
    )
};