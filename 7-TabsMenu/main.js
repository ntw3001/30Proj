const mainContent = document.querySelector("main");
const tabs = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");

console.log(mainContent, tabs, content);

mainContent.onclick = (e) => {
  console.log(e.target.dataset);
  const id = e.target.dataset.id;
  if (id) {
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });

    e.target.classList.add("active");

    content.forEach((content) => {
      content.classList.remove("active");
      if (content.id === id) {
        content.classList.add("active");
      }
    });
  }
};
