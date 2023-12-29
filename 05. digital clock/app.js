
function updateDate(){
    let now = new Date();
    console.log(now);
    let day = now.getDay();
    console.log(day);
    let month = now.getMonth();
    console.log(month);
    let date = now.getDate();
    console.log(date);
    let year = now.getFullYear();
    console.log(year);
    let hours = now.getHours();
    console.log(hours);
    let minuts = now.getMinutes();
    console.log(minuts);
    let seconds = now.getSeconds();
    console.log(seconds);
    let periods = "AM";
    console.log(periods);

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    // set 12 hourse time show
    if (hours == 0){
        hours = 12;
    }if(hours > 12){
        // hours = hours - 12
        periods = "PM";
    }

    // add 0 in the beginning of number if less than 10
    // 10 se kam number hone per unke pahle 0 lagane ke liye hai yah code

    hours = (hours < 10) ? "0" + hours : hours;
    minuts = (minuts < 10) ? "0" + minuts : minuts;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.querySelector('#day').innerHTML = days[day];
    document.querySelector('#month').innerHTML = months[month];
    document.querySelector('#date').innerHTML = date;
    document.querySelector('#year').innerHTML = year;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minuts').innerHTML = minuts;
    document.querySelector('#seconds').innerHTML = seconds;
    document.querySelector('#period').innerHTML = periods;
    



}

function showClock() {
    updateDate();
    window.setInterval("updateDate()", 1);
}

showClock();