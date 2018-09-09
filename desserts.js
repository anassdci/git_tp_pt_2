document.querySelector("button").addEventListener("click", function () {
    var nomDessert=prompt("ajouter dessert");

    var dessertElt=document.createElement("li");
    dessertElt.textContent=nomDessert;
    dessertElt.addEventListener("click",function (e) {
        var nouveauName=prompt("modifiez:", e.target.textContent);
        e.target.textContent=nouveauName;
        
    });
    document.getElementById("desserts").appendChild(dessertElt);


})