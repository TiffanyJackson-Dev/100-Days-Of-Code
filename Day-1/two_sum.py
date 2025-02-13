def twoSum(nums, target):
    num_map = {} # Dictionary to store numbers and their indices
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i] # Return indices
        num_map[num] = i
    return []

# Test
print(twoSum([2,7,11,15], 9))  # Output: [0,1]