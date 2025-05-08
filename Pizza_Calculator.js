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