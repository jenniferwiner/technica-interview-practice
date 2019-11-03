/*
*
* For solution in other languages:
https://leetcode.com/problems/valid-parentheses/solution/
https://leetcode.com/problems/valid-parentheses/discuss/?currentPage=1&orderBy=hot&query=
*
*/
function isValid(s) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let arr = [];
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            arr.push(s[i]);
        }
        else{
            if(arr[arr.length - 1] === map[s[i]]){
                arr.pop();
            }
            else return false;
        }
    }
    return arr.length === 0 ? true : false;
};
