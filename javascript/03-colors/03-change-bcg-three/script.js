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
