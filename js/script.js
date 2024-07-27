//                 id
input1 = document.getElementById("input1")
input2 = document.getElementById("input2")
button = document.getElementById("button")
inputNum = document.getElementById("inputNum")
inputNum2 = document.getElementById("inputNum2")
buttonNum = document.getElementById("buttonNum")
inputJS = document.getElementById("inputJS")
buttonJS = document.getElementById("buttonJS")
button2 = document.getElementById("button2")
input3 = document.getElementById("input3")
inputPassword = document.getElementById("inputPassword")
inputMail = document.getElementById("inputMail")
inputName = document.getElementById("inputName")
buttonLog = document.getElementById("buttonLog")

//                 1.
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
    let inputNum2Text = inputNum2.value;
    let inputNum2TextNum = Number.parseFloat(inputNum2Text)
    let inputNumTextNum = Number.parseFloat(inputNumText)
    totalNum = inputNum2TextNum + inputNumTextNum
    isNan = Number.isNaN(totalNum);
    if (isNan == true){
        console.log("Its not number")
        totalNum = 0
    }
    else{
        if( totalNum<=10){
            console.log("Сума менша або дорівнює 10")
        }
        else{
            console.log("Сума більша за 10")
        }
    }

});
//                  3.
buttonJS.addEventListener("click", function() {
    let inputJSText = inputJS.value;
    inJs = inputJSText.includes('JavaScript')
    if(inJs == true){
        console.log("Текст містить слово JavaScript")

    }
    else{
        console.log("Текст не містить слово JavaScript")
    }
});
//                  4.
button2.addEventListener("click", function() {
    let input3Text = input3.value;
    isNan2 = Number.isNaN(input3Text);
    if (isNan2 == true){
        console.log("Its not number")
        input3Text = 0 
    }
    else{
        if( input3Text>=10 && input3Text<=20){
            console.log("Число входить в діапазон від 10 до 20")
        }
        else{
            console.log("Число не входить в діапазон від 10 до 20")
        }
    }
});
//                  5.
buttonLog.addEventListener("click", function() {
   inputNameText = inputName.value;
   inputPasswordText = inputPassword.value;
   inputMailText = inputMail.value;
   if ( inputNameText.length <= 3){
    console.log("В імені має бути більше букв")
   }
   else{
    if(inputMailText.includes('@.') == false)
    console.log("В почті нема @.")
    else{
        if ( inputPasswordText.length <= 6){
            console.log("В паролі має бути більше символів")
           }
        else{
            console.log("Все добре")
        }
    }
   }
});