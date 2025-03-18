// script.js
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                this.parentElement.style.textDecoration = "line-through";
                this.parentElement.style.color = "#888";
            } else {
                this.parentElement.style.textDecoration = "none";
                this.parentElement.style.color = "#000";
            }
        });
    });
});
