
/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const run = () => {
      const table = Array.from(document.querySelectorAll("table td"));
  
    numbers = [],
    sum = 0;
  
      for (let i = 0; i < table.length; i++) {
        const number = Math.floor(Math.random() * 100);
        numbers.push(number);
        sum += number;
      }
  
      for (let i = 0; i < table.length; i++) {
        table[i].innerHTML = numbers[i];
      }
  
      document.getElementById("min").innerHTML = Math.min(...numbers);
      document.getElementById("max").innerHTML = Math.max(...numbers);
      document.getElementById("sum").innerHTML = sum;
      document.getElementById("average").innerHTML = sum / numbers.length;
    };
  
    document.getElementById("run").addEventListener("click", () => (run(), false));
  })();