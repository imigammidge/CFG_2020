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

// Subscribe button alert box //
function myFunction() {
  alert("Thank you for subscribing!");
}


// Subscribe button modal pop up ignore this //

var modal = document.querySelector(".modal");
var trigger = document.getElementById("sub-button");
var closeButton = document.querySelector(".close");

function toggleModal() {
   modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
   if (event.target === modal) {
            toggleModal();
   }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Ignore the above //


// Form 'Send Message' pop up //
function clicked(e)
{
    if(!confirm('Are you sure?');
}


// END
  
