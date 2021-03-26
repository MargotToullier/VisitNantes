const formSent = document.querySelector('.formButton');

formSent.addEventListener('click', function () {
    alert("Nous vous remercions pour votre message !");
})



const newsletterSent = document.querySelector('.newsletterButton');

// add a selector for the (initially hidden) thank you message div
const newsletterThanks = document.querySelector('.thanks');

newsletterSent.addEventListener('click', function () {
    // alert("Votre inscription est prise en compte ! ");
    // on button click, remove the class that hides the message div
    newsletterThanks.classList.remove('thanksHidden');
})