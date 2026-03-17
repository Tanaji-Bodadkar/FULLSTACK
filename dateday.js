let date = Number(prompt("Enter date (1-31):"));
let month = Number(prompt("Enter month (1-12):"));
let year = Number(prompt("Enter year:"));

let fullDate = new Date(year, month - 1, date);

//  Get day using switch
let dayNumber = fullDate.getDay();
let day;

switch(dayNumber){
    case 0: day = "Sunday"; break;
    case 1: day = "Monday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday"; break;
}

//  Get current time
let now = new Date();
let time = now.toLocaleTimeString("en-IN");

//  Format date
let formattedDate = fullDate.toDateString();

//  Output
console.log("Day:", day);
console.log("Date:", formattedDate);
console.log("Time:", time);