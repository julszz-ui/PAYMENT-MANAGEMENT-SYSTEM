const navButtons = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

navButtons.forEach(function(button) {
  button.addEventListener("click", function() {

    navButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    pages.forEach(function(page) {
      page.classList.add("hidden");
    });

    const targetPage = document.getElementById("page-" + button.dataset.page);
    targetPage.classList.remove("hidden");
  });
});