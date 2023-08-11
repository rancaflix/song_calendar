import localdate from "./components/getToday.js";
import todaySongs from "./components/todaySongs.js"

const body = document.body;

const homecard = document.createElement("div");
homecard.id = "homecard";
const todayIs = document.createElement("div");
todayIs.classList.add("todayis");
todayIs.textContent = `Today is ${localdate}`;
homecard.appendChild(todayIs);
body.appendChild(homecard);

homecard.appendChild(todaySongs);

const moreButton = document.createElement("button");
moreButton.classList.add("button");
moreButton.textContent = "Consult other days";
moreButton.onclick = function() {
    location.assign("/calendar.html")
}
homecard.appendChild(moreButton);