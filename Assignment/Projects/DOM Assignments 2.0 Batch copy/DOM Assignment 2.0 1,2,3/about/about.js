let accordian = document.querySelectorAll(".accordian h3");
let accordianWrapper = document.querySelector('.accordian-wrapper');
let newAccordian = document.querySelector('.accordian');

newAccordian.childNodes[1].innerText = 'Skills';
newAccordian.childNodes[3].innerText = 'I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.';
accordianWrapper.append(newAccordian);

accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

