/*
*
* For solution in other languages:
https://leetcode.com/problems/single-number/
https://leetcode.com/problems/single-number/discuss/?currentPage=1&orderBy=hot&query=
*
*/

var singleNumber = function(nums) {

    nums.sort((a,b)=>a-b);
    for(var i=0; i< nums.length; i++){
        nums[i] !== nums[i+1]
        if(nums[i] !== nums[i+1]){
            return nums[i];
        }
        i++;
    }
};
