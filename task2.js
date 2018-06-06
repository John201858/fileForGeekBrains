var date = process.argv[2];
var month = process.argv[3];
var year = process.argv[4];


function quantityDays(date,month,year) {
    var monthNumber;
    var maxDayFebr;
    if ((((year % 4) == 0) && ((year % 100) != 0)) || ((year % 400) == 0)) {
            maxDayFebr = 29;
       } else { maxDayFebr = 28;}
    var maxDays = [31, maxDayFebr, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    switch (month) {
        case 'января': 
            monthNumber = 0; break;
        case 'февраля': 
            monthNumber = 1; break;
        case 'марта':
            monthNumber = 2; break;
        case 'апреля':
            monthNumber = 3; break;
        case 'мая':
            monthNumber = 4; break;
        case 'июня': 
            monthNumber = 5; break;
        case 'июля':
            monthNumber = 6; break;
        case 'августа': 
            monthNumber = 7; break;
        case 'сентября': 
            monthNumber = 8; break;
        case 'октября':
            monthNumber = 9; break;
        case 'ноября':
            monthNumber = 10; break;
        case 'декабря':
            monthNumber = 11; break;
        default: 
            process.stdout.write('такого месяца не существует');
    } 
    
    var quantity = 0;
    for (var i = monthNumber; i <= 11; i++) {
        for (var j = date; j < maxDays[i]; j++) {
            quantity++; 
        }
        date = 0;
    }

    return quantity + '\n';
}

process.stdout.write(quantityDays(date, month, year));
