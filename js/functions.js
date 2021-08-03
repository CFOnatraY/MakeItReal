function count(text, character) {
    var letterCount = 0;
    for (var i = 0; i < text.length; i++){
        if (text.charAt(i) == character){
            letterCount += 1;
        }
    }
    return letterCount;
}

function filter(numArray) {
    var filteredArray = [];
    for (var i = 0; i < numArray.length; i++){
        if (numArray[i] > 10) {
            filteredArray.push(numArray[i]);
        }
    }
    return filteredArray;
}

function hypotenuse(a, b) {
    var hypot = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return hypot
} 