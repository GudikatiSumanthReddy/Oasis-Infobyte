let degreeTemperature = document.getElementById("degrees");
let fahrenheitTemperature = document.getElementById("fahrenheit");

function ConvertingTemperature(){
    if(fahrenheitTemperature.value === ""){
        let degreeTemperatureinput = parseFloat(degreeTemperature.value);
        let ouput = (degreeTemperatureinput*9)/5+32;
        fahrenheitTemperature.value = ouput;
        
    }else{
        let fahrenheitTemperatureinput = parseFloat(fahrenheitTemperature.value);
        let output = (fahrenheitTemperatureinput-32) *5/9;
        let output1 = output.toFixed(2);
        degreeTemperature.value = output1;
    }
}