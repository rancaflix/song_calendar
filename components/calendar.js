import calendarview from "./calendarview.js";

const body = document.body;
const homecard = document.createElement("div");
homecard.classList.add("homecard");
homecard.appendChild(calendarview);
body.appendChild(homecard);