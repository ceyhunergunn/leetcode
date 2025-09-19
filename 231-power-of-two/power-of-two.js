/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 0) return false
    let res = Math.log2(n)
    return Math.floor(res) === res;
};