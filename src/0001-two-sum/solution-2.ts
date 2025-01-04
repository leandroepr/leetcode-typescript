function twoSum(nums: number[], target: number): number[] {
    let i = 0
    let j = nums.length -1
    for(i; i < nums.length-1; i++){
      for (j; j > i; j--){
        if(nums[i] + nums[j] === target){
          return [i,j]
        }
      }
      j = nums.length -1
    }
    throw new Error('No two sum solution')
};

export { twoSum }

