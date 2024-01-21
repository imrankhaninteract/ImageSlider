const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.top = `${index * 100}%`;
});

const goPrev = () => {
    counter = (counter - 1 + slides.length) % slides.length;
    slideImage();
};

const goNext = () => {
    counter = (counter + 1) % slides.length;
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateY(-${counter * 100}%)`;
    });
};
