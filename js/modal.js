const modal = document.querySelector(".backdrop");

export function showModal() {
  modal.classList.toggle("active");
}
 function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
 }