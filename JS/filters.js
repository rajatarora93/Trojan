var filters = angular.module("filters", []);
filters.filter('MyNumber', function () {
    return function (num) {
        if(isNaN(num))
        {
            return num;
        }
        else {
            var lastDigit = num % 10;
            if(lastDigit==1)
            {
                return num + 'st';
            }
            else if (lastDigit == 2) {
                return num + 'nd';
            } else if (lastDigit == 3) {
                return num + 'rd';
            } else if (lastDigit > 3) {
                return num + 'th';
            }
        }
    }
});

filters.filter('MyFirstLetter', function () {
    return function (word, char) {
        if (isNaN(word)) {
            var char = char - 1 || 0;
            var letter = word.charAt(char).toUpperCase();
            var out =[];
            for (var i = 0; i < word.length; i++) {
                if (i == char) {
                    out.push(letter);
                } else {
                    out.push(word[i]);
                }
            }
            return out.join('');
        } else {
            return word;
        }
    }
});

filters.filter('MyCurrency', function () {
    return function (currency, currSymbol, position) {
        if (isNaN(currency)) {
            return currency;
        }
        else {
            var symbol = currSymbol || '$';
            var position = position == undefined ? true : position;
            if (position == true) {
                return symbol + currency;
            }
            else {
                return currency + symbol;
            }
        }
    }
});
filters.filter('BookCurrency', function () {
    return function (currency,key,currSymbol) {
        if(key=='cost')
        {
            if(isNaN(currency))
            {
                return 'N/A';
            }
            else {
                return ':'+currSymbol + '.' + currency;
            }
        }
        else {
            return ':'+currency;
        }
    }
});