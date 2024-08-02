$(".testimonial-carousel").owlCarousel({
    // nav: true,
    dots: true,
    margin: 20,
    loop: true,
    autoplay: true,
    responsive: {
      0: {
          items: 1 
      },
      768: {
          items: 2 
      },
      1024: {
          items: 3  
      }
  }
});

var owl1 = $('.testimonial-carousel');
owl1.owlCarousel();
$('.review-next-btn').click(function() {
    owl1.trigger('next.owl.carousel', [300]);
})
// Go to the previous item
$('.review-prev-btn').click(function() {
    owl1.trigger('prev.owl.carousel', [300]);
})

// banner-carousel
$(".banner-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
})

// tab content

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.color = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();