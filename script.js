var weight = document.getElementById("weight");
var height = document.getElementById("height");
var w1 = document.getElementById('ptok');
var h1 = document.getElementById('ftom');
function calculateBMI() {
    if (isNaN(Number(weight.value)) || isNaN(Number(height.value))) 
        return;
    let BMI = Number((Number(weight.value) / Math.pow((Number(height.value)), 2)).toFixed(1));
    document.getElementById("output").value=BMI;
    }
function convert(){
    if(w1)
    document.getElementById("ptok")
}
function calcheight(){
    let w = (document.getElementById("height1").value);
    w1= (w/3.2).toFixed(2);
    document.getElementById("height").value=w1;
    alert("your Weight is been entered into cacluator");
}