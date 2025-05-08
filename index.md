<img src="/images/School_Domo_FoxHoodie.jpg" alt="School_Domo_FoxHoodie)" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 3px solid #333;">


# Hiya! Welcome to my site!
# Here you will find some of the things I have made


### Practical:
<script>
    function Pizza_Calculator(){
        let people, pizza, slices, totalSlices, slicesPerperson, slicesLeft;

console.log("Amount of people: ");
people = parseInt(prompt());

console.log("Amount of boxes of pizzas: ");
pizza = parseInt(prompt());

console.log("Slices Per Pizza: ");
slices = parseInt(prompt());

totalSlices = pizza * slices;

slicesPerperson = 3 * people;
slicesLeft = totalSlices - slicesPerperson;

console.log("Slices left over: " + slicesLeft);
    }
    </script>
<button onclick="Pizza_Calculator()">Calculate Pizza Slices Per Person</button>
    <p id="result"></p>
</div>
### Fun:
