/* ========================= typing animation  ========================= */
var typed = new Typed(".typing", {
  strings: ["", "Full-Stack Developer", "Software Developer", "Web Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
/* ========================= sidebar ========================= */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavlist = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavlist; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavlist; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
  });
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
