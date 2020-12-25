function autoFill (string, dictionaryArray) {
    // уберем любые небуквенные символы 
    const regex = /\W+|\d+/;
    string = string.replace(regex,'');
    let p = document.getElementById('autoFill')
    if (dictionaryArray.slice().filter((word) => word.toLowerCase().startsWith(string.toLowerCase())).length == 0 && string.length > 0) {
        autoFill(string.slice(0, string.length-1), dictionaryArray)         
    } else {
        // startsWith("") возвращает тру
        result = string.length == 0 ? [] : dictionaryArray.slice().filter((word) => word.toLowerCase().startsWith(string.toLowerCase()))           
    }
    result = result.length > 5 ? result.slice(0,5) : result // вернуть пять результатов
    p.innerHTML = result.join(' ');    
    return result;
 } 