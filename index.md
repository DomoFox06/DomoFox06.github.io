<img src="/images/School_Domo_FoxHoodie.jpg" alt="School_Domo_FoxHoodie)" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 3px solid #333;">


# Hiya! Welcome to my site!
# Here you will find some of the things I have made


### Practical:
<div style="text-align: center; margin-top: 20px;">
    <button onclick="showPizzaBox()">Scroll Down to Start</button>
</div>

<div id="pizza-box" style="border: 1px solid #ccc; padding: 15px; width: 300px;">
    <label>Amount of people:</label><br>
    <input type="number" id="people"><br><br>

    <label>Amount of boxes of pizzas:</label><br>
    <input type="number" id="pizza"><br><br>

    <label>(8 for triangle, 16 for square) Slices Per Pizza:</label><br>
    <input type="number" id="slices"><br><br>

    <label>(Suggested: 3) Slices Per Person:</label><br>
    <input type="number" id="spp"><br><br>

    <button onclick="Pizza_Calculator()">Calculate Pizza</button>

    <div id="result" style="margin-top: 10px;"></div>
</div>

<script>
    function Pizza_Calculator() {
        let people = parseInt(document.getElementById("people").value);
        let pizza = parseInt(document.getElementById("pizza").value);
        let slices = parseInt(document.getElementById("slices").value);
        let spp = parseInt(document.getElementById("spp").value);

        let totalSlices = pizza * slices;
        let totalNeeded = people * spp;
        let slicesLeft = totalSlices - totalNeeded;

        const resultBox = document.getElementById("result");
        resultBox.innerHTML = `
            <strong>Pizza Calculation Summary:</strong><br><br>
            People: ${people}<br>
            Boxes of Pizza: ${pizza}<br>
            Slices per Pizza: ${slices}<br>
            Total Slices: ${totalSlices}<br>
            Slices Needed (${spp} per person): ${totalNeeded}<br>
            <strong>Slices Left Over: ${slicesLeft}</strong>
        `;
    }
</script>

### Fun:

[Axalotle Go!](https://flowlab.io/games/play/2381148)
