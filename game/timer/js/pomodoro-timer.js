var gHours = 0;
var gMinutes = 0;
var gSeconds = 0;
var gMiliseconds = 0;
var remainingTime;

var countdownHandle;

var audio = new Audio('./sounds/beep.mp3');

$(document).ready(function() {
  onPomodoroTimer();
});

function onStartTimer(){
  stopTimer();
  gHours = 0;
  gMinutes = 1;
  gSeconds = 0;
  gMiliseconds = 0;
  resetTimer();
  startTimer();
};

function onStopTimer(){
  stopTimer();

};

function onResetTimer(){
  stopTimer();
  resetTimer();
}

function startAlarm(){
  if(remainingTime<1000)
  {
    audio.play();
  }
}

function startTimer() {
  countdownHandle=setInterval(function() {
    decrementTimer();
  },1000);
}

function stopTimer() {
  clearInterval(countdownHandle);
  startAlarm();

}

function resetTimer(){

  remainingTime = (gHours*60*60*1000)+
  (gMinutes*60*1000)+
  (gSeconds*1000);
  renderTimer();
}

function renderTimer(){


  var deltaTime=remainingTime;

  var hoursValue=Math.floor(deltaTime/(1000*60*60));
  deltaTime=deltaTime%(1000*60*60);

  var minutesValue=Math.floor(deltaTime/(1000*60));
  deltaTime=deltaTime%(1000*60);

  var secondsValue=Math.floor(deltaTime/(1000));

  var milisecondsValue = Math.floor((deltaTime/(1000))/10);

  animateTime(hoursValue, minutesValue, secondsValue, milisecondsValue);
};


function animateTime(remainingHours, remainingMinutes, remainingSeconds, remainingMiliseconds) {

  // position
  $('#hoursValue').css('top', '0em');
  $('#minutesValue').css('top', '0em');
  $('#secondsValue').css('top', '0em');
  $('#milisecondsValue').css('top', '0em');

  $('#hoursNext').css('top', '0em');
  $('#minutesNext').css('top', '0em');
  $('#secondsNext').css('top', '0em');
  $('#milisecondsNext').css('top', '0em');

  var oldHoursString = $('#hoursNext').text();
  var oldMinutesString = $('#minutesNext').text();
  var oldSecondsString = $('#secondsNext').text();
  var oldMilisecondsString = $('#milisecondsNext').text();

  var hoursString = formatTime(remainingHours);
  var minutesString = formatTime(remainingMinutes);
  var secondsString = formatTime(remainingSeconds);
  var milisecondsString = formatTime(remainingMiliseconds);

  $('#hoursValue').text(oldHoursString);
  $('#minutesValue').text(oldMinutesString);
  $('#secondsValue').text(oldSecondsString);
  $('#milisecondsValue').text(oldMilisecondsString);

  $('#hoursNext').text(hoursString);
  $('#minutesNext').text(minutesString);
  $('#secondsNext').text(secondsString);
  $('#milisecondsNext').text(milisecondsString);

  // set and animate
  if(oldHoursString !== hoursString) {
    $('#hoursValue').animate({top: '-=1em'});
    $('#hoursNext').animate({top: '-=1em'});
  }

  if(oldMinutesString !== minutesString) {
    $('#minutesValue').animate({top: '-=1em'});
    $('#minutesNext').animate({top: '-=1em'});
  }

  if(oldSecondsString !== secondsString) {
    $('#secondsValue').animate({top: '-=1em'});
    $('#secondsNext').animate({top: '-=1em'});
  }

  if(oldMilisecondsString !== milisecondsString) {
    $('#milisecondsValue').animate({top: '-=1em'});
    $('#milisecondsNext').animate({top: '-=1em'});
  }
}


function formatTime(intergerValue){

  return intergerValue > 9 ? intergerValue.toString():'0'+intergerValue.toString();

}

function decrementTimer(){

  remainingTime-=(1*1000);

  if(remainingTime<1000){
    onStopTimer();
  }

  renderTimer();
}
