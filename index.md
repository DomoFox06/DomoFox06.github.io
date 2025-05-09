<img src="/images/School_Domo_FoxHoodie.jpg" alt="School_Domo_FoxHoodie)" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 3px solid #333;">


# Hiya! Welcome to my site!
# Here you will find some of the things I have made


### Practical:
<div id="pizza-box" style="border: 1px solid #ccc; padding: 15px; width: 300px;">
    <button onclick="Pizza_Calculator()">Calculate Pizza</button>
    <div id="result" style="margin-top: 10px;"></div>
</div>

<script>
    function Pizza_Calculator() {
        let people = parseInt(prompt("Amount of people:"));
        let pizza = parseInt(prompt("Amount of boxes of pizzas:"));
        let slices = parseInt(prompt("(8 slices for triangle cut. 16 slices for square cut) Slices Per Pizza:"));
        let spp = parseInt(prompt("(Sugested three slices per person) Slices per person:"));

        let totalSlices = pizza * slices;
        let slicesPerperson = spp * people;
        let slicesLeft = totalSlices - slicesPerperson;

        const resultBox = document.getElementById("result");
        resultBox.innerHTML = "Slices left over: " + slicesLeft;
    }
</script>

### Fun:

[Axalotle Go!](https://flowlab.io/games/play/2381148)
