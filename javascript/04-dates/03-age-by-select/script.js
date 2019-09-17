/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    document.getElementById("run").addEventListener("click", () => {


    const now = new Date();
    var dayNow = now.getDate();
    var monthNow = now.getMonth();
    var yearNow = now.getFullYear();

    var dayOld =  document.getElementById("dob-day").value;
    var monthOld = document.getElementById("dob-month").value;
    var yearOld = document.getElementById("dob-year").value;

    console.log(monthNow);
    console.log(dayNow);

       // if (monthNow < monthOld){}








});
})();
