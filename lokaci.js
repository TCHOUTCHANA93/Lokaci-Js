setInterval(setClock, 1000)
const welcome =document.getElementById('welcome');
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const heure = document.getElementById('heure')


  
function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand , secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock();

function start(){
    var dat = new Date();
    var hour = dat.getHours();
    var minutes = dat.getMinutes();
    var second = dat.getSeconds();
    heure.textContent=`Il est ${hour} heure ${minutes < 10 ? '0' : ''}${minutes} minutes ${second < 10 ? '0' : ''}${second} sconds`;
    console.log(hour);
    
};
setInterval(start, 1000);

function welcom(){
    welcome.style.display='none';
}

welcome.addEventListener('click', welcom);