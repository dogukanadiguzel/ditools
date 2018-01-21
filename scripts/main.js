function isElementInViewport(x) {
  var dimensions = x.getBoundingClientRect();
  return (
    dimensions.top >= 0 &&
    dimensions.left >= 0 &&
    dimensions.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    dimensions.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
var items = document.querySelectorAll(".timeline li, .box");

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);