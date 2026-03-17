//if condition else if and if else
// let num1 =100;
// let num2 = 200
// let num3 = 300
// if(num1 > num2 && num1 > num3){
//     console.log(num1);
// }
// else if(num2 > num1 && num2 > num3){
//     console.log(num2);
// }
// else if(num3 > num1 && num3 > num2){
//     console.log(num3);
// }
// else{
//     console.log("All numbers are equal");
// }

//nested if
// let country = prompt("Enter your country:");
// let age = Number(prompt("Enter your age:"));
// let text = "You cannot drive!";

// if (country.toLowerCase() === "india") {
//     if (age >= 18) {
//         text = "You can drive!";
//     }
// }

// if (country.toLowerCase() === "usa") {
//     if (age >= 16) {
//         text = "You can drive!";
//     }
// }

// console.log(text);

//ternary operator
// let age = 20;
// let text= (age < 18)? "Minor" : "Adult";
// console.log(text);

//switch
let day = Number(prompt("Enter a day of the week:"));
switch(day){
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;

    default:
        console.log("Invalid day");
}
console.log(day)