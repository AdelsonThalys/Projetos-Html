const daysEL = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minutesEL = document.getElementById('minutes')
const secondsEL = document.getElementById('seconds')

const newYear = '30 Jul 2023';

function countdown() {
    const newYearDate = new Date(newYear);
    const curentDate = new Date();
    
    const data = (newYearDate - curentDate);
    
    const seconds = (data / 1000);
    
    
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor((seconds/3600)-(days*24));
    const minutes = Math.floor(( seconds - (days * 24 * 3600) - hours * 3600)/60);
    const segundos = Math.floor(( seconds - (days * 24 * 3600))- (hours*3600)- minutes*60);

    console.log(days, hours, minutes, segundos);

    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minutesEL.innerHTML = minutes;
    secondsEL.innerHTML = segundos;
}

countdown()

setInterval(countdown, 1000)