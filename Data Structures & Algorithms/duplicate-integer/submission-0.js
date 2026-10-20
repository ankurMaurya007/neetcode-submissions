class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let length = nums.length;
        let set = new Set(nums)
        let size = set.size;
        console.log(length, set, size)
        if(length > size){
            return true;
        }else {
            return false;
        }
    }
}
