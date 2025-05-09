<img src="/images/School_Domo_FoxHoodie.jpg" alt="School_Domo_FoxHoodie)" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 3px solid #333;">


# Hiya! Welcome to my site!
# Here you will find some of the things I have made


### Practical:
<div>
    <button onclick="Pizza_Calculator()">Calculate Pizza</button>
</div>

<script>
    function Pizza_Calculator() {
        let people = parseInt(prompt("Amount of people:"));
        let pizza = parseInt(prompt("Amount of boxes of pizzas:"));
        let slices = parseInt(prompt("Slices Per Pizza:"));

        let totalSlices = pizza * slices;
        let slicesPerperson = 3 * people;
        let slicesLeft = totalSlices - slicesPerperson;

        // Show in console
        console.log("Slices left over: " + slicesLeft);

        // Also show in the page
        document.body.innerHTML += "<p>Slices left over: " + slicesLeft + "</p>";
    }
</script>

### Fun:

[Axalotle Go!](https://flowlab.io/games/play/2381148)
