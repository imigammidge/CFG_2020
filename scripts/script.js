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


// Subscribe button modal pop up //
// Get the modal
var modal = document.getElementById("myModal")
// Get the button that opens the modal
var btn = document.getElementById("sub-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Subscribe button modal pop up END //

// END
  
