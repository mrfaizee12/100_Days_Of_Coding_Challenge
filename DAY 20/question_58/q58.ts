// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function calculateAverage(scores: number[]): number {
    if (scores.length === 0) {
        return 0; // Return 0 if there are no scores
    }

    let sum: number = 0; // Use let to allow reassignment
    for (const score of scores) {
        sum += score;
    }
    
    const average: number = sum / scores.length; // Calculate the average score
    return Number(average.toFixed(2)); // Truncate the average to two decimal places
}

// Example usage with different scores
let scores: number[] = [70, 85, 78, 92, 90, 88, 95];
const averageScore: number = calculateAverage(scores);
console.log("Average Score:", averageScore); // Output: Average Score: 85

