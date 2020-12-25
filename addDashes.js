function addDashes(num) {
    var digits = num.toString().split('');    
    var div = document.getElementById('dashes');

    for (let i = 0; i < digits.length; i++) {        
        if (digits[i] % 2 != 0 && digits[i-1] % 2 == 0 ) { // если число нечетное и предущее четное, то мы ставим перед ним дефис
            digits[i] = '-' + digits[i].toString()
            // если следующее при этом число четное, то мы закрываем дефисом
            if (digits[i+1] % 2 == 0) {
                digits[i] = digits[i].toString() + '-';
            }
        }
        else if (digits[i] % 2 !=0 && digits[i-1] % 2 !=0 && digits[i+1] % 2 == 0) { 
            // если число нечетное и предыдущее за ним тоже, а следующее четное, то закрываем дефисом
            digits[i] = digits[i].toString() + '-'
        }
        else if (digits[i] % 2 !=0 && digits[i+1] % 2 == 0) {
            // если число нечетное, а следующее четное то закрываем дефисом 
            digits[i] = digits[i].toString() + '-'
        }            
    }  

    var res = digits.join('');
    div.innerHTML= res
    return res
}
console.log(addDashes(645545965)); // '64-55-4-59-6-5'
console.log(addDashes(411222333)); // '4-11-222-333'
console.log(addDashes(81229576231)); // '8-1-22-957-62-31'
