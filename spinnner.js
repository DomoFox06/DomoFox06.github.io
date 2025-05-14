
<div style="text-align: center; margin-top: 20px;">
    <button id="scroll-btn" onclick="toggleSpiner()">Random Spinner!</button>
</div>

<div id="spinner" style="display: none; border: 1px solid #ccc; padding: 15px; width: 300px; margin-top: 20px;">
    <lable>Input what is going on the spinner:</lable>
     <lable>Input 1:</lable>
    <input type ="text" id="text1"><br><br>

    <lable>Input 2:</lable>
    <input type ="text" id="text2"><br><br></br>

    <button onclick="addInput()">Add More</button>
<div id="container"></div>

<script>
function addInput() {
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "people";  
    let container = document.getElementById("container");
    container.appendChild(newInput);
    container.appendChild(document.createElement("br")); 
    Ta++;
}
</script>

<script>
    int Ta;
   int spin() {
    return (rand() % Ta + 1);
    }
    choice=spin();
    
    cout << 
</script>
</div>