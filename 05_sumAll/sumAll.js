const sumAll = function(firstInteger, secondInteger) {

if ( Number.isInteger(firstInteger) !== true || Number.isInteger(secondInteger) !== true ) {
    return "ERROR";
}

if ( firstInteger > secondInteger ) { 
    [firstInteger, secondInteger] = [secondInteger, firstInteger]
}

if ( firstInteger < 0 || secondInteger < 0 ) {
    return "ERROR";
    }

    let sum = 0;

    for ( i = firstInteger; i <= secondInteger; i++ ) {
        sum += i;
    }

    return sum;
    

};

// Do not edit below this line
module.exports = sumAll;
