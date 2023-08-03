
const calendarview = document.createElement("div");
calendarview.id = "calendarview";
fetch('../constants/months.json')
    .then(response => response.json())
    .then(data => {
        const monthNames = Object.keys(data);
        const monthDivs = monthNames.map(month => {
            const div = document.createElement("div");
            div.classList.add("monthdiv");
            div.textContent = month;
            return div;
        });
    monthDivs.forEach(div => calendarview.appendChild(div));
    });

export default calendarview;