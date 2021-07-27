// forEach2, find2, filter2 
Array.prototype.forEach2 = function(callback){
    var arrayLength = this.length;
    var output = [];
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i]);
        output.push(result);
    }
    return output;
}

Array.prototype.find2 = function(callback) {
    var arrayLength = this.length;
    var output = undefined;
    for (var i = 0; i < arrayLength; i++){
        if (callback(this[i])) {
            output = this[i];
            break;
        }
    }
    return output;
}

Array.prototype.filter2 = function(callback) {
    var arrayLength = this.length;
    var output = [];
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i]);
        if (result) {
            output.push(this[i]);
        }
    }
    return output;
}

Array.prototype.reduce2 = function(callback, result) {
    var arrayLength = this.length;
    var result;
    var i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < arrayLength; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

Array.prototype.every2 = function(callback) {
    var flag = true;
    for (var i of this) {
        // console.log(callback(i));
        if (callback(i) == false) {
            flag = false;
            return flag;
        }
    }
    return flag;
}

Array.prototype.some2 = function(callback) {
    var flag = false;
    
    for (var index in this) {
        // console.log(index);
        // console.log(callback(index));
        if (this.hasOwnProperty(index)) {
            console.log(index);
            if (callback(this[index])) {
                flag = true;
                return flag;
            }
        }
    }
    return flag;
}

var numbers1 = [2, 12, 6, 20, 120];
var numbers = [2, 13, 6, 20, 125];
numbers1.length = 20;

var myOuput = numbers1.some2(function(number) {
    return number > 20 ;
});

console.log(myOuput);