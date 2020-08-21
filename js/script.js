const myScreen = document.getElementById("calculator-screen");
var last = "";
const signs = ['+', '-', '*', '/', '%'];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function clearAll(){
    myScreen.value = "";
}
function clearLast(){
    if (last !== "") {
        last = myScreen.value.charAt(myScreen.value.length - 2);
        myScreen.value = myScreen.value.substring(0, myScreen.value.length - 1);
    }
}
function calculate(elem){
    if (signs.includes(elem) && !digits.includes(last)) return;
    myScreen.value += elem;
    last = elem;
}
function equals(){
    var operation = myScreen.value;
    myScreen.value = eval(operation);
}
