const today = document.getElementById("today");
const timeRow= document.getElementById("row");
const present = document.getElementById("present");
let currentHour = parseInt(moment().format('H'));

Array.from(timerow).forEach(row => {
    let rowIdString = row.id, rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        if (currentHour === rowHour) {
            setColor(row, "blue");
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
            setColor (row, "red");
        }else if ((currentHour < rowHour) && (currentHour < rowHour + 6)) {
            setColor(row, "grey");
        }else {
            setColor(row, "grey");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}

const m = moment()

console.log(m.format("MMMM Do YYYY, h:mm:ss a"));

today.textContent = (m.format("MMMM Do YYYY, h:mm:ss a"));

function saveTime() {
    var textarea = document.getElementById("textarea").ariaValueMax;
}

var saveBTN = document.getElementsByClassName("saveBTN")

saveBTN.addEventListener("click", saveTime, false);