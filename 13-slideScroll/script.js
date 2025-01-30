//this function limits how often "check()" runs,ensuring that it will only run after a certain amount of time
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const imgs = document.querySelectorAll(".slide");

function check() {
  //console.log(window.scrollY)
  console.log(window.innerHeight);
  imgs.forEach((img) => {
    console.log("Windor scrol Y ", window.scrollY);
    console.log("height", window.innerHeight);
    console.log("img.offsetTop", img.offsetTop);
    console.log("img.height", img.height);
    console.log("/2", img.height / 2);

    const slideInAt = window.scrollY + window.innerHeight - img.height / 4;
    console.log("slideinAT", slideInAt);
    const imgBottom = img.offsetTop + img.height;
    const isHalfShown = slideInAt > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imgBottom;

    if (isHalfShown && isNotScrolledPast) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(check));
