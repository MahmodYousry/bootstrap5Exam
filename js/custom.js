
// start navbar trick on scroll

  // Get the navbar element
  const navbar = document.querySelector('.navbar');
  // Listen to the scroll event on the window object
  window.addEventListener('scroll', function() {
    // Check the current vertical scroll position
    if (window.scrollY >= 20) {
      // Add the 'white' class to the navbar
      navbar.classList.remove('navbar-dark');
      navbar.classList.add('navbar-light');
      navbar.classList.add('bg-light');
      navbar.classList.add('nav-scroll');
      navbar.classList.add('p-0');
    } else {
      // Remove the 'white' class from the navbar
      navbar.classList.remove('bg-light');
      navbar.classList.add('navbar-dark');
      navbar.classList.remove('navbar-light');
      navbar.classList.remove('nav-scroll');
      navbar.classList.remove('p-0');
    }
  });

// End navbar trick on scroll

// start portfolio gallery trick

  const filterButtons = document.querySelectorAll('.filtering span');
  const filterAbleCards = document.querySelectorAll('.gallery .items');

  // define filter cards function
  const filterCards = e => {
    document.querySelector(".filtering .active").classList.remove("active");
    e.target.classList.add("active");

    // iterate on each card
    filterAbleCards.forEach(items => {
      // add hide class to hide all items
      items.classList.add("hide");
      // check if the item matches the selected filter or 'all' is selected
      if (items.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
        console.log("items name  = "+ items.dataset.name)
        console.log("etarget  = "+ e.target.dataset.name)
        items.classList.remove("hide");
      } else {

      }
    });
  }

  // add Event Listner for each filter button
  filterButtons.forEach(span => span.addEventListener("click", filterCards));

// End portfolio gallery trick



document.addEventListener("DOMContentLoaded", function () {
  // Find all navbar links
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Close the navbar menu when a link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var navbarToggler = document.querySelector(".navbar-toggler");
      var navbarCollapse = document.querySelector(".navbar-collapse");

      // If the navbar menu is open, close it
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click(); // Simulate a click on the navbar toggler button
      }
    });
  });
  
});
