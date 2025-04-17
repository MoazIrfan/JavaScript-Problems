function twoSum(nums, target) {
let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
}



let target=12;
let nums=[1,4,7,9,2,4,5,6,7,5,6]

console.log(twoSum(nums,target));