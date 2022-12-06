/** @format */
function changeTextFromToColor(colorFrom) {
  // Get and loop through each links.
  for (let spanLink of document.getElementsByClassName("link")) {
    let colorTo = null;
    switch (colorFrom) {
      case "red":
        colorTo = "powderblue";
        break;
      case "blue":
        colorTo = "black";
        break;
      case "green":
        colorTo = "yellow";
        break;
      default:
        colorTo = "white";
    }
    spanLink.style.color = colorTo;
  }
}

document.addEventListener("scroll", (e) => {
  // Get wrapper of all background-colored divs
  const content = document.getElementById("content");

  //   Get current scroll position.
  lastKnownScrollPosition = window.scrollY;

  //   Get all background-colored divs.
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
    if (lastKnownScrollPosition >= childPosition) {
      if (item.style.backgroundColor) {
        console.log("inside", item.style.backgroundColor);
        changeTextFromToColor(item.style.backgroundColor);
      } else {
      }
      break;
    }
  }
});
