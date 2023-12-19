
let heartWrapper = document.querySelector('.heart-wrapper')
let redHeart = document.querySelector(".red-heart");

heartWrapper.addEventListener("click", function () {
    redHeart.classList.toggle('pop')   
});