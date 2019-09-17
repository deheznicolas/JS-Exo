/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


      


    document.getElementById("run").addEventListener("click", () => {
        var lettre = '0123456789ABCDEF';
        var color = '#';

        for (var i = 0; i < 6; i++) {
          color += lettre[Math.floor(Math.random() * 16)];
        }
        


        document.body.style.backgroundColor = color;
    });
})();
