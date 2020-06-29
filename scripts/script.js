// ---- This is for the scroll back to top button ---- //
// "listens" for when the window is scrolled on. When a scroll happens, "scrollFunction" is executed
$(window).scroll(scrollFunction);

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if ( $(window).scrollTop() > 20 ) {
    $("#go-top-button").show();
  } else {
    $("#go-top-button").hide();
  }
};
  
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $(window).scrollTop(0);
}
// ---- Scroll back to top button END ---- //


// ---- Subscribe button prompt ---- //
// When the user clicks on the Subscribe now button make the background have an overlay
const toggleModal = () => {
  document.querySelector('.modal')
  .classList.toggle('modal--hidden');
};

document.querySelector('#show-modal')
  .addEventListener('click', toggleModal);

document.querySelector('#subscribe')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    toggleModal();
});

document.querySelector('.modal__close-bar span')
  .addEventListener('click', toggleModal);
// ---- Subscribe button prompt END ---- //

// Subscribe button attempt 2 //
var modal = document.getElementById("sub-button")
var btn = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
// END
  
