document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const micIcon = document.querySelector(".mic-icon");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const luckyButton = document.getElementById("lucky-button");
    const popupCard = document.getElementById("popupCard");
  
    function togglePopupCard(event) {
      // Toggle the visibility of the pop-up card
      popupCard.classList.toggle("show");
  
      // Get the position of the clicked icon
      const iconRect = event.target.getBoundingClientRect();
  
      // Set the position of the pop-up card with a downward margin
      const downwardMargin = 40; // Adjust the downward margin as needed
  
      // Adjust the top position
      popupCard.style.top = iconRect.bottom + downwardMargin + "px";
      popupCard.style.left = iconRect.left + "px";
    }
  
    // Click event for the search icon
    searchIcon.addEventListener("click", togglePopupCard);
  
    // Click event for the mic icon
    micIcon.addEventListener("click", togglePopupCard);
  
    // Click event for the search input
    searchInput.addEventListener("click", togglePopupCard);
  
    // Click event for the search button
    searchButton.addEventListener("click", togglePopupCard);
  
    // Click event for the "I'm Feeling Lucky" button
    luckyButton.addEventListener("click", togglePopupCard);
  });
  
  // Function to toggle dropdown list
function toggleDropdown(event) {
    // Prevent event from propagating to the window
    event.stopPropagation();

    // Close all open dropdowns
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }

    // Toggle the clicked dropdown
    event.target.nextElementSibling.classList.toggle("show");
}

// Event listeners for dropdown
document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("mouseover", toggleDropdown, false);
    }
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
};
// Add this JavaScript to script.js

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const micIcon = document.querySelector(".mic-icon");
  
    // Click event for the search icon
    searchIcon.addEventListener("click", function () {
      console.log("Search icon clicked");
  
      // Add a class to indicate the clicked state
      searchIcon.classList.add("clicked");
  
      // Remove the clicked state after a short delay (for visual feedback)
      setTimeout(() => {
        searchIcon.classList.remove("clicked");
      }, 200);
    });
  
    // Click event for the mic icon
    micIcon.addEventListener("click", function () {
      console.log("Mic icon clicked");
  
      // Add a class to indicate the clicked state
      micIcon.classList.add("clicked");
  
      // Remove the clicked state after a short delay (for visual feedback)
      setTimeout(() => {
        micIcon.classList.remove("clicked");
      }, 200);
    });
  });
