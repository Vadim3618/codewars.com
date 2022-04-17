// Sort Numbers

function solution(nums) {
    return nums ? nums.sort((a, b) => a - b) : []
}

console.log(solution([1, 2, 10, 50, 5])); // should return [1,2,5,10,50]
console.log(solution(null)); // should return []