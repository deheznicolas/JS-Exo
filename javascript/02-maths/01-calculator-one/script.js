/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    var num1 = document.getElementById("op-one").value;
    var num2 = document.getElementById("op-two").value;

    document.getElementById("addition").addEventListener("click", () => {
        var result =(num1 + num2);
        alert(result);
        
    });

    document.getElementById("substraction").addEventListener("click", () => {
        var result =(num1 - num2);
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        var result =(num1 * num2);
        alert(result);
    });

    document.getElementById("division").addEventListener("click", () => {
        var result =(num1 / num2);
        alert(result);
    });



})();
