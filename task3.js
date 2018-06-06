var numberOne = parseInt(process.argv[2]);
var numberTwo = parseInt(process.argv[3]);

function clockMinutesSeconds(numberOne,numberTwo) {
//----------������� ����� �����-------------------------------------------------
    var amountNumber = numberOne + numberTwo;
//------------------------------------------------------------------------------

//----------������� ����--------------------------------------------------------
    clock = Math.floor(amountNumber / 3600);
//------------------------------------------------------------------------------

//----------������� ������------------------------------------------------------
    minutes = Math.floor(amountNumber % 3600 / 60);
//------------------------------------------------------------------------------

//----------������� �������-----------------------------------------------------
    seconds = Math.floor(amountNumber % 60);
//------------------------------------------------------------------------------ 
    clockName = '';
    minutesName = '';
    secondsName = '';
    
    if ((clock % 10) == 1) { clockName = ' ��� ';}
    if (((clock % 10) >= 2) && ((clock % 10) < 5)) { clockName = ' ���� ';}
    if (((clock % 10) == 0) || ((clock % 10) >= 5)) { clockName = ' ����� ';}
    
    if ((minutes % 10) == 1) { minutesName = ' ������ ';}
    if (((minutes % 10) >= 2) && ((minutes % 10) < 5)) { minutesName = ' ������ ';}
    if (((minutes % 10) == 0) || ((minutes % 10) >= 5)) { minutesName = ' ����� ';}
    
    if ((seconds % 10) == 1) { secondsName = ' �������';}
    if (((seconds % 10) >= 2) && ((seconds % 10) < 5)) { secondsName = ' �������';}
    if (((seconds % 10) == 0) || ((seconds % 10) >= 5)) { secondsName = ' ������';} 
    
    if (Math.floor(clock / 10) == 1) {clockName = ' ����� ';}
    if (Math.floor(minutes / 10) == 1) {minutesName = ' ����� ';}
    if (Math.floor(seconds / 10) == 1) {secondsName = ' ������';}
    
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