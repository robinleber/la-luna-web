let hours = {
    /* Sun */ 0: { open: [1130, 1700], closed: [1400, 2230] },
    /* Mon */ 1: {},
    /* Tue */ 2: { open: [1700], closed: [2230] },
    /* Wed */ 3: { open: [1700], closed: [2230] },
    /* Thu */ 4: { open: [1130, 1700], closed: [1400, 2230] },
    /* Fri */ 5: { open: [1130, 1700], closed: [1400, 2230] },
    /* Sat */ 6: { open: [1130, 1700], closed: [1400, 2230] },
}

function determineDayTime() {
    let isOpen = "closed";
    let day = new Date().getDay(); // Get day index => #0-6
    let time = getTime(); // Get time with format "hhmm"
    time = parseInt(time); // Parse time to Integer
    if (!jQuery.isEmptyObject(hours[day])) { // Is object at pos. "day" empty?
        for (let i = 0; i < hours[day].open.length; i++) { // Iterate through opening hours
            for (let j = 0; j < hours[day].closed.length; j++) { // Iterate trough closing hours
                if (hours[day].open[i] <= time && time < hours[day].closed[i]) { // Is opening hours at pos. "i" < current time < closing hours at pos. "i"?
                    if (hours[day].closed[i] - time <= 30) { // Is closing time - current time < or = 30?
                        isOpen = "soonClosing"; // We're closing soon
                    } else {
                        isOpen = "open"; // We're Open!
                    }
                    break; // Break second loop
                } else {
                    isOpen = "closed"; // We're Closed!
                }
            }
            // Second if-statement to break second loop
            if (hours[day].open[i] <= time && time < hours[day].closed[i]) { // Is opening hours at pos. "i" < current time < closing hours at pos. "i"?
                if (hours[day].closed[i] - time <= 30) { // Is closing time - current time < or = 30?
                    isOpen = "soonClosing"; // We're closing soon
                } else {
                    isOpen = "open"; // We're Open!
                }
                break; // Break second loop
            } else {
                isOpen = "closed"; // We're Closed!
            }
        }
    } else {
        isOpen = "closed";
    }
    toggleDoor(isOpen); // Toggle Style of "Hours of Opereation"-Table
}

// Get Time with format => "hhmm"
function getTime() {
    let hoursString = `${new Date().getUTCHours() + 2}`; // Get Hours
    let minutesString = `${new Date().getUTCMinutes()}`; // Get Minutes
    let minutes = new Date().getUTCMinutes();
    if (minutes < 10) { // Are Minutes < 10
        minutesString = `0${minutes}`; // Place "0" before Minutes (e.g. "5" => "05")
    }
    return `${hoursString}${minutesString}`; // Return String with format => "hhmm"
}

// "Hours of Operation"-Table-Element
const openingTimes = document.getElementById("js-opening-times");
// Door-Icon-Element
const doorIcon = document.getElementById("js-door-icon");
// "Hours of Operation"-Title-Element
const openingTimesTitle = document.getElementById("js-opening-times-title");

function toggleDoor(isOpen) {
    if (isOpen === "open") {
        /**
         * Set background to green
         * Open door
         * Set title to "We're Open"
         */
        openingTimes.classList.toggle("bg-danger", false);
        openingTimes.classList.toggle("bg-warning", false);
        openingTimes.classList.toggle("bg-success", true);
        doorIcon.classList.toggle("fa-door-open", true);
        doorIcon.classList.toggle("fa-door-closed", false);
        openingTimesTitle.innerHTML = "Wir haben zurzeit geöffnet";
    } else if (isOpen === "soonClosing") {
        /**
         * Set background to orange
         * Open door
         * Set title to "We're soon closing"
         */
        openingTimes.classList.toggle("bg-danger", false);
        openingTimes.classList.toggle("bg-warning", true);
        openingTimes.classList.toggle("bg-success", false);
        doorIcon.classList.toggle("fa-door-open", true);
        doorIcon.classList.toggle("fa-door-closed", false);
        openingTimesTitle.innerHTML = "Wir schließen in Kürze";
    } else {
        /**
         * Set background to red
         * Close door
         * Set title to "We're Closed"
         */
        openingTimes.classList.toggle("bg-danger", true);
        openingTimes.classList.toggle("bg-warning", false);
        openingTimes.classList.toggle("bg-success", false);
        doorIcon.classList.toggle("fa-door-open", false);
        doorIcon.classList.toggle("fa-door-closed", true);
        openingTimesTitle.innerHTML = "Wir haben zurzeit geschlossen";
    }
}