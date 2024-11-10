document.addEventListener("DOMContentLoaded", () => {
    const book = document.querySelector(".book");
    
    // Add the 'open' class after a short delay to trigger the animation
    setTimeout(() => {
      book.classList.add("open");
    }, 500); // Adjust the delay for the effect
  });
  