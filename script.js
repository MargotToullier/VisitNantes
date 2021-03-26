const formSent = document.querySelector('.formButton');

const commentsThanks = document.querySelector('.thanksComments');

formSent.addEventListener('click', function () {
    // alert("Nous vous remercions pour votre message !");
    commentsThanks.classList.remove('thanksHidden');

})



const newsletterSent = document.querySelector('.newsletterButton');

// add a selector for the (initially hidden) thank you message div
const newsletterThanks = document.querySelector('.thanksNews');

newsletterSent.addEventListener('click', function () {
    // alert("Votre inscription est prise en compte ! ");
    // on button click, remove the class that hides the message div
    newsletterThanks.classList.remove('thanksHidden');
})