/*
*
* For solution in other languages:
https://leetcode.com/articles/fibonacci-number/
https://leetcode.com/problems/fibonacci-number/discuss/?currentPage=1&orderBy=hot&query=
*
*/

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N <= 1) {
        return N;
    }
    return fib(N-1) + fib(N-2);
};