//função que calcula a mudança de utc
function scheduleTimeZone(utc){
    var date = new Date();
    var greenwich = date.getTimezoneOffset() + date.getMinutes();
    var newCity = utc * 60;

    date.setMinutes(greenwich+newCity);

    var clock = modelTime(date.getHours())+":"+modelTime(date.getMinutes())+":"+modelTime(date.getSeconds());

    return clock.toString();
}

//Função que inicia a apresentação dos relógios e entra em loop
function startHora(){
    document.getElementById("clock-brasilia").innerHTML = scheduleTimeZone(-3);
    document.getElementById("clock-london").innerHTML = scheduleTimeZone(1);
    
    
    var timeOut= setTimeout(function(){
        startHora()
    }, 500);
}

function modelTime(n){
    if(n<10){
        n="0"+n;
    }
    return n;
}