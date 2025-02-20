const images = document.querySelectorAll('.slider img')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

let index=0

images[0].classList.add('active')

function showSlide(newIndex){
    images[index].classList.remove('active')
    index = (newIndex + images.length) % images.length
    images[index].classList.add('active')
}

nextBtn.addEventListener('click', ()=> showSlide(index + 1))
prevBtn.addEventListener("click", ()=> showSlide(index - 1))