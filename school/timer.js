// date we want
let countdowndate = new Date('Nov 4, 2025 11:59');

//update timer every 1sec
var x = setInterval (function(){
    // get todays date and time
    let today = new Date().getTime();
    // distance between now and countdown
    let distance = countdowndate - today;
    //hours
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //min
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // second
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // display hour
    document.getElementById('hour').innerHTML = hours
    //display minutes
    document.getElementById('min').innerHTML = minutes
    // display second
    document.getElementById('sec').innerHTML = seconds
    // if timer ran out
    
}

)