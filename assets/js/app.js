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
  const tickets = document.querySelectorAll(".ticket");

  tickets.forEach((ticket) => {
    const amountNumber = ticket.querySelector(".amountNumber");
    const amountPositiv = ticket.querySelector(".amountPositiv");
    const amountNegativ = ticket.querySelector(".amountNegativ");

    let amount = 0;

    amountPositiv.addEventListener("click", () => {
      if (amount < 10) {
        amount += 1;
        amountNumber.textContent = amount;
      }
    });

    amountNegativ.addEventListener("click", () => {
      if (amount > 0) {
        amount -= 1;
        amountNumber.textContent = amount;
      }
    });
  });
});
