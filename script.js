function threeSum(arr, target) {
// write your code he
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum === target) {
                // We found an exact match, so return early
                return sum;
            } else if (sum < target) {
                // We need to increase the sum, so move the left pointer
                left++;
            } else {
                // We need to decrease the sum, so move the right pointer
                right--;
            }
        }
    }

    return closestSum;


  
}

module.exports = threeSum;
