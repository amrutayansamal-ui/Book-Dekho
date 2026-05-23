// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Cart Functionality

let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;

    button.innerText = "Added ✓";

    setTimeout(() => {
      button.innerText = "Add to Cart";
    }, 1000);
  });
});
