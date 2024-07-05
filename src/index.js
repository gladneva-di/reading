import "./styles/main.scss";
import { PageFlip } from "page-flip";

const pageFlip = new PageFlip(document.getElementById("book"), {
  width: 150,
  height: 157,
  size: "stretch",
  minWidth: 150,
  maxWidth: 730,
  minHeight: 157,
  maxHeight: 755,
  drawShadow: false,
  usePortrait: false,
});

pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));

const pages = document.querySelectorAll(".pageNum");

pages.forEach((element) =>
  element.addEventListener("click", () => {
    console.log(element.getAttribute("page"));
    console.log(Number(element.getAttribute("page")));
    pageFlip.turnToPage(Number(element.getAttribute("page")));
  })
);
document.addEventListener("click", () => {
  console.log(pageFlip.getCurrentPageIndex());
});
