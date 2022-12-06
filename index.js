/** @format */

const textToBackgroundMapper = {
  red: "white",
  green: "yellow",
  blue: "black",
};

function changeTextColor(scrollPos) {
  // Do something with the scroll position

  var headerLinks = document.getElementsByClassName("link");
  //   headerLinks.style.color = textToBackgroundMapper;
}

document.addEventListener("scroll", (e) => {
  const content = document.getElementById("content");
  lastKnownScrollPosition = window.scrollY;

  const children = content.children;

  if (
    children[0].getBoundingClientRect().top + lastKnownScrollPosition >
    lastKnownScrollPosition
  ) {
    console.log("outside");
  }

  for (let item of Array.from(children).reverse()) {
    const rect = item.getBoundingClientRect();
    const childPosition = rect.top + lastKnownScrollPosition;
    // console.log("childPosition", childPosition);

    if (lastKnownScrollPosition >= childPosition) {
      if (item.style.backgroundColor) {
        console.log("inside", item.style.backgroundColor);
      } else {
      }
      break;
    }
  }

  changeTextColor(lastKnownScrollPosition);
});
