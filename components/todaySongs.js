import querySong from "./querySong.js";

const today = new Date();
const todaysongs = document.createElement("div");
todaysongs.classList.add("todaysongs");

const monthToFetch = today.toLocaleString('en-US', { month: 'long' }); // Get the full month name
const dayToFetch = today.getDate();
querySong(monthToFetch, dayToFetch)
    .then(songs => {
        console.log(`Songs for ${monthToFetch} ${dayToFetch}:`, songs);});

todaysongs.textContent = "The songs for today are:"

export default todaysongs;