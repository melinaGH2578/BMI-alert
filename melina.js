// const guest = prompt("please enter number of your guests:");
// const name1 = prompt("please enter name of your guests:" ,);
// const nameguests = ("guest");


// if (guest > 10) {
//     alert(``);
// }


// else if (bodyBMI < 25 && bodyBMI >= 18) {
//     alert(`you are cool`);
// }


// else {
//     alert(`you are thin`);

// }
const weight = prompt("please enter your weight in kg:", 65);
const height = prompt("please enter your height in meter:", 1.7);
const bodyBMI = weight / (height * height)
alert(`your BMI is : ${bodyBMI}`);


if (bodyBMI > 25) {
    alert(`you are so Fat, you need some practice`)

}
else if (bodyBMI < 25)
    alert(`cheers, you are cool`)