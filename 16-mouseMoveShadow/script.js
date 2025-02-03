const section = document.querySelector("section");
const text = section.querySelector("h1");

const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = section;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const walkX = Math.round((x / width) * walk - walk / 2);
  const walkY = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = ` ${walkX}px ${walkY}px 0px rgba(62, 224, 252, 0.41),
  ${-walkX}px ${walkY}px 0px rgba(238, 50, 109, 0.71)`;
}
section.addEventListener("mousemove", shadow);
