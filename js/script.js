//                 1.
input1 = document.getElementById("input1")
input2 = document.getElementById("input2")
button = document.getElementById("button")
inputNum = document.getElementById("inputNum")
inputNum2 = document.getElementById("inputNum2")
buttonNum = document.getElementById("buttonNum")
button.addEventListener("click", function() {
    input1Text = input1.value;
    input2Text = input2.value;
    if(input1Text.length>0 && input2Text.length>0){
        console.log("Обидва поля заповнені")
    }
    else{
        console.log("Не всі поля заповнені")
    }
});
//                  2.
buttonNum.addEventListener("click", function() {
    let inputNumText = inputNum.value;
    let inputNum2Text = input2Text.value;
    console.log(Number.parseFloat(inputNum2Text))
});
