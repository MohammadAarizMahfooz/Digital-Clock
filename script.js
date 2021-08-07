updateTime();
window.onload = function(){
    setInterval(updateTime, 1000)
};

function updateTime() {
    let d = new Date;
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if(hours<=9){
        hours = '0'+hours;
    } else {
        hours = ''+hours;
    }
    if(minutes<=9){
        minutes = '0'+minutes;
    } else {
        minutes = ''+minutes;
    }
    if(seconds<=9){
        seconds = '0'+seconds;
    } else {
        seconds = ''+seconds;
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    let date = d.getDate();
    let month = d.getMonth();
    month = month+1;
    let year = d.getFullYear();
    let day = d.getDay();
    if(date<=9){
        date = '0'+date;
    } else {
        date = ''+date;
    }
    if(month<=9){
        month = '0'+month;
    } else {
        month = ''+month;
    }
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    day = days[day];
    fullDate = date + '/' + month + '/' + year;
    document.getElementById("date").innerHTML = fullDate;
    document.getElementById("day").innerHTML = day;
}