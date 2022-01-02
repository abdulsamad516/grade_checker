function check(){
    var temp = document.getElementById('temp').value;
    var minTemp = document.getElementById('minTemp').value;
    var maxTemp = document.getElementById('minTemp').value;
    var result = document.getElementById('result');


    if ((temp < -10) || (minTemp < -10 )){
        result.innerText = 'dont go out its too cold';
    }else if(
        (temp > 35 || maxTemp > 35)
    ){
        result.innerText = 'dont go out too hot';
    }else if(
        (temp >= -10 && temp <= 5) || (minTemp >= -10 && minTemp <= 5)
    ){
        result.innerText = 'carry coat its gonna be cold';
    }else if(
        (temp > 5 && temp <= 20) || (minTemp > 5 && minTemp <= 20)
    ){
        result.innerText = 'carry jacket its gonna be cold';
    }else if(
        (temp > 20 && temp <= 35) || (minTemp > 20 && minTemp <= 35)
    ){
        result.innerText = 'dont carry jacket';
    }

}