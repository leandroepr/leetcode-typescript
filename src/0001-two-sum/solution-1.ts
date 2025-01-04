function twoSum(nums: number[], target: number): number[] {
    const numToIndexMap: {[key: number]: number} = {};
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const diff = target - currentNum;
      if (diff in numToIndexMap) {
          return [numToIndexMap[diff], i];
      }
      numToIndexMap[currentNum] = i;
    }
    throw new Error('No two sum solution'); // should not reach here
};

export { twoSum };
