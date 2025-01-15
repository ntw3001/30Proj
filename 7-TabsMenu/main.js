const mainContent = document.querySelector("main");
const tabs = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");

console.log(mainContent, tabs, content);

mainContent.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
      e.target.classList.add("active");
    });
    content.forEach(function (content) {
      if (content.id === id)
      content.classList.add("active");
      else {
        content.classList.remove("active");
      }
    });
  }
});
