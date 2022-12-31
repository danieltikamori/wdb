//Arrays comparison in JavaScript are the references in memory, not arrays contents.
// [1] == [1] or ===, even [] == [] returns false. They are not referring to the same thing in memory
let nums = [1, 2, 3];
let numsCopy = nums;
nums.push(4)
nums
numsCopy
//refers to the same thing in memory
numsCopy.pop()
nums //nums also changed
numsCopy
nums === numsCopy // true