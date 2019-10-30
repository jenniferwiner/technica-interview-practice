/*
*
* For solution in other languages:
https://leetcode.com/problems/climbing-stairs/solution/
https://leetcode.com/problems/climbing-stairs/discuss/?currentPage=1&orderBy=hot&query=
*
*/

const climbStairs = (n) => {
    let steps = []
    steps[0] = 1
    steps[1] = 1
    for(let i = 2; i <= n; i++){
        steps[i] = steps[i - 1] + steps[i - 2]
    }
    
    return steps[n]
};