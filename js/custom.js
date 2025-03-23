// Select ul titles
const h3 = $('h3');

// Add Event listener
h3.on('click', function () {
  const ul = $(this).next();
  if (window.innerWidth <= 767) {
    // Add class for clicked h3
    $(this).toggleClass('expanded');
    ul.slideToggle(500);
  }
});

// Handle window resize event
$(window).on('resize', function () {
  if (window.innerWidth > 768) {
    h3.removeClass('expanded');
    $('h3 + ul').show();
  } else if (window.innerWidth < 768) {
    h3.removeClass('expanded');
    $('ul').hide();
  }
});
