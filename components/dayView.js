import handleMonth from "./handleMonth.js";

const dayView = async (month, day) => {
    // make monthview disappear
    const monthsDiv = document.getElementById("monthsDiv");
    monthsDiv.remove();

    // get homecard
    const homecard = document.getElementById("homecard");
    
    // create or reestablish div
    const dayView = document.createElement("div");
    dayView.id = "dayView";

    // div for day title
    const dayName = document.createElement("div");
    dayName.id = "daynamediv";
    dayView.appendChild(dayName);

    // creates back button
    const chevronsLeft =  document.createElement("img");
    chevronsLeft.id = "chevronleft";
    chevronsLeft.src = "../images/chevrons-left.svg";
    dayName.appendChild(chevronsLeft)

    // day title
    const dayTitle = document.createElement("span");
    dayTitle.textContent = `${month} ${day}`
    dayName.appendChild(dayTitle);

    // add all up
    homecard.appendChild(dayView);

    // functionality back button
    chevronsLeft.addEventListener("click", () => {
        dayView.remove();
        handleMonth(month);
    })
}

export default dayView;