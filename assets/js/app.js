/*Navigation*/
let burgerMenuOpen = document.querySelector(".burgerMenuOpen");
let burgerMenuClose = document.querySelector(".burgerMenuClose");
let navLinks = document.querySelector(".nav-links");

burgerMenuOpen.addEventListener("click", () => {
  navLinks.classList.add("active");
  burgerMenuOpen.classList.add("active");
  burgerMenuClose.classList.add("active");
});

burgerMenuClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  burgerMenuOpen.classList.remove("active");
  burgerMenuClose.classList.remove("active");
});

/*Billing ticket amount*/
document.addEventListener("DOMContentLoaded", (event) => {
  const amountNumberElement = document.querySelector(".amountNumber");
  const amountPositiv = document.querySelector(".amountPositiv");
  const amountNegativ = document.querySelector(".amountNegativ");

  let amount = 0;

  amountPositiv.addEventListener("click", () => {
    if (amount < 10) {
      amount += 1;
      amountNumberElement.textContent = amount;
    }
  });

  amountNegativ.addEventListener("click", () => {
    if (amount > 0) {
      amount -= 1;
      amountNumberElement.textContent = amount;
    }
  });
});
