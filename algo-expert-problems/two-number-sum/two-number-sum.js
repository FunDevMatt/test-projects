// function twoNumberSum(array, targetSum) {
//     let answer = [];
//     array.forEach(num => {
//         let numForGoal = targetSum - num;
//         let newArray = [...array];
//         let indexToRemove = newArray.indexOf(num);
//         newArray.splice(indexToRemove, 1);
//         if (newArray.includes(numForGoal)) {
//             answer = [num, numForGoal]
//         }
//     })
//     if (answer.length === 0) {
//         return "no matches"
//     }
//     return answer.sort((a, b) => a - b);
// }

// optimal solutuon | time = o(nlog(n)) | space = o(1)
function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]]
        } else if (currentSum < targetSum) {
            left++
        } else if (currentSum > targetSum) {
            right--
        }
    }
    return "no matches"
}

module.exports = twoNumberSum;

