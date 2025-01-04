describe.each([
    ['Solution 1 (Hash Map)', require('./solution-1').twoSum],
    ['Solution 2 (Brute Force)', require('./solution-2').twoSum]
])('%s', (_, twoSum) => {
    it('should return [0, 1] for nums = [2,7,11,15] and target = 9', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it('should return [1, 2] for nums = [3,2,4] and target = 6', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it('should return [0, 1] for nums = [3,3] and target = 6', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
});