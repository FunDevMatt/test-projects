function twoNumberSum(array, targetSum) {
    let answer = [];
    array.forEach(num => {
        let numForGoal = targetSum - num;
        let newArray = [...array];
        let indexToRemove = newArray.indexOf(num);
        newArray.splice(indexToRemove, 1);
        if (newArray.includes(numForGoal)) {
            answer = [num, numForGoal]
        }
    })
    if (answer.length === 0) {
        return "no matches"
    }
    return answer.sort((a, b) => a - b);
}

module.exports = twoNumberSum;


console.log(twoNumberSum([1, 2, 3, 4, 4], 8))