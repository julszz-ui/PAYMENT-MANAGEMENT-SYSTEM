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

function openStatement(name, tuition, misc, other, discount) {
    const total = tuition + misc + other - discount;

    document.getElementById("billing-header").querySelector("h3").textContent =
        "Student Billing Information - " + name;

    document.getElementById("stmt-title").textContent =
        "Total Balance - ₱ " + total.toLocaleString(undefined, {minimumFractionDigits: 2}) + " (1st Sem)";

    document.getElementById("stmt-tuition").textContent = "₱ " + tuition.toLocaleString(undefined, {minimumFractionDigits: 2});
    document.getElementById("stmt-misc").textContent = "₱ " + misc.toLocaleString(undefined, {minimumFractionDigits: 2});
    document.getElementById("stmt-other").textContent = "₱ " + other.toLocaleString(undefined, {minimumFractionDigits: 2});
    document.getElementById("stmt-discount").textContent = "₱ " + discount.toLocaleString(undefined, {minimumFractionDigits: 2});

    document.getElementById("student-list-view").classList.add("hidden");
    document.getElementById("statement-view").classList.remove("hidden");
}

function closeStatement() {
    document.getElementById("billing-header").querySelector("h3").textContent = "Student Billing Information";
    document.getElementById("statement-view").classList.add("hidden");
    document.getElementById("student-list-view").classList.remove("hidden");
}