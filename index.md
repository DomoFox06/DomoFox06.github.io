<img src="/images/School_Domo_FoxHoodie.jpg" alt="School_Domo_FoxHoodie)" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 3px solid #333;">


# Hiya! Welcome to my site!
# Here you will find some of the things I have made


### Practical:<!-- Toggle Scroll Button -->
<!-- Toggle Scroll Button -->
<div style="text-align: center; margin-top: 20px;">
    <button id="scroll-btn" onclick="togglePizzaBox()">Scroll Down to Start</button>
</div>

<!-- Pizza Calculator Box (initially hidden) -->
<div id="pizza-box" style="display: none; border: 1px solid #ccc; padding: 15px; width: 300px; margin-top: 20px;">
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
    let pizzaBoxVisible = false;

    function togglePizzaBox() {
        const pizzaBox = document.getElementById("pizza-box");
        const scrollBtn = document.getElementById("scroll-btn");

        if (!pizzaBoxVisible) {
            pizzaBox.style.display = "block";
            pizzaBox.scrollIntoView({ behavior: "smooth" });
            scrollBtn.innerText = "Scroll Back Up";
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => {
                pizzaBox.style.display = "none";
                scrollBtn.innerText = "Scroll Down to Start";
            }, 600); // Delay to let scroll finish before hiding
        }

        pizzaBoxVisible = !pizzaBoxVisible;
    }

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
