const removeFromArray = function(givenArray, ...toRemove) {

    return givenArray.filter(x => !toRemove.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
