var string = process.argv[2];

function palindrome(originalString) {
//--------------Узнаём длину строки---------------------------------------------
    var lengthString = originalString.length;
//------------------------------------------------------------------------------
	
//--------------Переставляем символы строки наоборот----------------------------
	var reverseString = '';
	
	for (var i = lengthString; i >= 0; i--) {
	    reverseString = reverseString + originalString.charAt(i);
	}
//------------------------------------------------------------------------------

//--------------Удаляем из строк ненужные символы------------------------------
    function deleteSymbol(str) {
        var strDeletedSymbol = '';
        for (var i = 0; i <= lengthString; i++) {
            
            while ((str.charAt(i) == ' ') ||
               (str.charAt(i) == '!') || (str.charAt(i) == '"') ||
               (str.charAt(i) == '#') || (str.charAt(i) == '$') ||
               (str.charAt(i) == '%') || (str.charAt(i) == '&') ||
               (str.charAt(i) == "'") || (str.charAt(i) == '(') ||
               (str.charAt(i) == ')') || (str.charAt(i) == '*') ||
               (str.charAt(i) == '+') || (str.charAt(i) == ',') ||
               (str.charAt(i) == '-') || (str.charAt(i) == '.') ||
               (str.charAt(i) == '/') || (str.charAt(i) == '0') ||
               (str.charAt(i) == '1') || (str.charAt(i) == '2') ||
               (str.charAt(i) == '3') || (str.charAt(i) == '4') ||
               (str.charAt(i) == '5') || (str.charAt(i) == '6') ||
               (str.charAt(i) == '7') || (str.charAt(i) == '8') ||
               (str.charAt(i) == '9') || (str.charAt(i) == ':') ||
               (str.charAt(i) == ';') || (str.charAt(i) == '<') ||
               (str.charAt(i) == '=') || (str.charAt(i) == '>') ||
               (str.charAt(i) == '?') || (str.charAt(i) == '@') ||
               (str.charAt(i) == '[') || (str.charAt(i) == ']') ||
               (str.charAt(i) == '^') || (str.charAt(i) == '_') ||
               (str.charAt(i) == '{') || (str.charAt(i) == '}') ||
               (str.charAt(i) == '|') || (str.charAt(i) == '~') ||
               (str.charAt(i) == '`')) {
               i++;
            }
            
            strDeletedSymbol = strDeletedSymbol + str.charAt(i);
        }
        return strDeletedSymbol;
    }
    
    newOriginalString = deleteSymbol(originalString).toLowerCase();
    newReverseString = deleteSymbol(reverseString).toLowerCase();
//------------------------------------------------------------------------------

//--------------Проверяем совпадают ли строки-----------------------------------
	var counter = 0;
	var lengthNewString = newOriginalString.length;
	for (var i = 0; i <= lengthNewString; i++) {
	    if (newOriginalString.charAt(i+1) == newReverseString.charAt(i+1)) {
	        counter++;
	    }
	}
	
    presencePalindrome = (counter == lengthNewString) ? 'YES' : 'NO';
//------------------------------------------------------------------------------
    
	return presencePalindrome;
}

process.stdout.write(palindrome(string));