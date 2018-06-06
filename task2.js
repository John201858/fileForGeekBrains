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
        case '������': 
            monthNumber = 0; break;
        case '�������': 
            monthNumber = 1; break;
        case '�����':
            monthNumber = 2; break;
        case '������':
            monthNumber = 3; break;
        case '���':
            monthNumber = 4; break;
        case '����': 
            monthNumber = 5; break;
        case '����':
            monthNumber = 6; break;
        case '�������': 
            monthNumber = 7; break;
        case '��������': 
            monthNumber = 8; break;
        case '�������':
            monthNumber = 9; break;
        case '������':
            monthNumber = 10; break;
        case '�������':
            monthNumber = 11; break;
        default: 
            process.stdout.write('������ ������ �� ����������');
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
