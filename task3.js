var numberOne = parseInt(process.argv[2]);
var numberTwo = parseInt(process.argv[3]);

function clockMinutesSeconds(numberOne,numberTwo) {
//----------Находим сумму чисел-------------------------------------------------
    var amountNumber = numberOne + numberTwo;
//------------------------------------------------------------------------------

//----------Находим часы--------------------------------------------------------
    clock = Math.floor(amountNumber / 3600);
//------------------------------------------------------------------------------

//----------Находим минуты------------------------------------------------------
    minutes = Math.floor(amountNumber % 3600 / 60);
//------------------------------------------------------------------------------

//----------Находим секунды-----------------------------------------------------
    seconds = Math.floor(amountNumber % 60);
//------------------------------------------------------------------------------ 
    clockName = '';
    minutesName = '';
    secondsName = '';
    
    if ((clock % 10) == 1) { clockName = ' час ';}
    if (((clock % 10) >= 2) && ((clock % 10) < 5)) { clockName = ' часа ';}
    if (((clock % 10) == 0) || ((clock % 10) >= 5)) { clockName = ' часов ';}
    
    if ((minutes % 10) == 1) { minutesName = ' минута ';}
    if (((minutes % 10) >= 2) && ((minutes % 10) < 5)) { minutesName = ' минуты ';}
    if (((minutes % 10) == 0) || ((minutes % 10) >= 5)) { minutesName = ' минут ';}
    
    if ((seconds % 10) == 1) { secondsName = ' секунда';}
    if (((seconds % 10) >= 2) && ((seconds % 10) < 5)) { secondsName = ' секунды';}
    if (((seconds % 10) == 0) || ((seconds % 10) >= 5)) { secondsName = ' секунд';} 
    
    if (Math.floor(clock / 10) == 1) {clockName = ' часов ';}
    if (Math.floor(minutes / 10) == 1) {minutesName = ' минут ';}
    if (Math.floor(seconds / 10) == 1) {secondsName = ' секунд';}
    
    var result = clock + clockName + minutes + minutesName + seconds + secondsName;

    if (clock == 0) { result = minutes + minutesName + seconds + secondsName;} 
    if (minutes == 0) { result = clock + clockName + seconds + secondsName;}
    if (seconds == 0) { result = clock + clockName + minutes + minutesName;}
    if ((clock == 0) && (minutes == 0)) {result = seconds + secondsName;}
    if ((clock == 0) && (seconds == 0)) {result = minutes + minutesName;}
    if ((minutes == 0) && (seconds == 0)) {result = clock + clockName;}

    return result + '\n';
}

process.stdout.write(clockMinutesSeconds(numberOne,numberTwo));