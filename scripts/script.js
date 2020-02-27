window.onload = () => {
    checkTime(new Date());
    setInterval(() => {
        checkTime(new Date());
    }, 6000);
}

const hoursOfOperation = {
    "mon": {
        "open": [""],
        "closed": [""],
    },
    "tue": {
        "open": ["17.00"],
        "closed": ["22.30"],
    },
    "wed": {
        "open": ["17.00"],
        "closed": ["22.30"],
    },
    "thu": {
        "open": ["11.00", "17.00"],
        "closed": ["14.30", "22.30"],
    },
    "fri": {
        "open": ["11.00", "17.00"],
        "closed": ["14.30", "22.30"],
    },
    "sat": {
        "open": ["11.00", "17.00"],
        "closed": ["14.30", "22.30"],
    },
    "sun": {
        "open": ["11.00", "17.00"],
        "closed": ["14.30", "22.30"],
    },
}

let isOpen = true;

function checkTime(currentDate) {
    // for (let i = 0; i < hoursOfOperation.length; i++) {
        console.log(hoursOfOperation.mon);
    // }
    toggleDoor();
    isOpen = !isOpen;
}

const openingTimes = document.getElementById("js-opening-times");
const doorIcon = document.getElementById("js-door-icon");
const openingTimesTitle = document.getElementById("js-opening-times-title");

function toggleDoor() {
    if(isOpen) {
        openingTimes.classList.toggle("bg-danger", false);
        openingTimes.classList.toggle("bg-success", true);
        doorIcon.classList.toggle("fa-door-open", true);
        doorIcon.classList.toggle("fa-door-closed", false);
        openingTimesTitle.innerHTML = "Wir haben zurzeit geöffnet";
    } else {
        openingTimes.classList.toggle("bg-danger", true);
        openingTimes.classList.toggle("bg-success", false);
        doorIcon.classList.toggle("fa-door-open", false);
        doorIcon.classList.toggle("fa-door-closed", true);
        openingTimesTitle.innerHTML = "Wir haben zurzeit geschlossen";
    }
}