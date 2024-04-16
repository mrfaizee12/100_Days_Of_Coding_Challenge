// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function calculateAverage(scores) {
    if (scores.length === 0) {
        return 0; // Return 0 if there are no scores
    }
    var sum = 0; // Use let to allow reassignment
    for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
        var score = scores_1[_i];
        sum += score;
    }
    var average = sum / scores.length; // Calculate the average score
    return Number(average.toFixed(2)); // Truncate the average to two decimal places
}
// Example usage with different scores
var scores = [70, 85, 78, 92, 90, 88, 95];
var averageScore = calculateAverage(scores);
console.log("Average Score:", averageScore); // Output: Average Score: 85
