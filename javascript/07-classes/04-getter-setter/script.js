/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it la


(() => {
    class Person {
        constructor(firstName, lastName)
        {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get name() {
            return this.firstName + " " + this.lastName;
        }
        set name(completeName) {
            let compounds = completeName.split(' ');
            this.firstName = compounds[0];
            this.lastName = compounds[1];
        }
    }

    document.getElementById("run").addEventListener("click", () => {

        test1 = new Person ("Le", "Localhost");
        console.log(test1.name);
        test1 = "Hacked Anonymous";
        console.log(test1);







    });




})();
