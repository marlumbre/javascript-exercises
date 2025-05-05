const removeFromArray = function(givenArray, toRemove) {
    while(true) {
        let indexToRemove = givenArray.indexOf(toRemove);
        givenArray.splice(indexToRemove, 1);

        return givenArray;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
