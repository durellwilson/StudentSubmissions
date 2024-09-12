//1
const submissions = [
    { name: 'Jane', score: 95, passed: true },
    { name: 'Joe', score: 77, passed: true },
    { name: 'Jack', score: 59, passed: false },
    { name: 'Jill', score: 88, passed: true }
];
//2
function addSubmission(array, newName, newScore) {
    const newSubmission = {
        name: newName,
        score: newScore,
        passed: newScore >= 60
    };
    array.push(newSubmission);
}
//3
function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}
//4
function deleteSubmissionByName(array, name) {
    const index = array.findIndex(submission => submission.name === name);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
//5
function editSubmission(array, index, score) {
    if (index >= 0 && index < array.length) {
        array[index].score = score;
        array[index].passed = score >= 60;
    }
}
//6
function findSubmissionByName(array, name) {
    return array.find(submission => submission.name === name);
}
//7
function findLowestScore(array) {
    return array.reduce((lowest, submission) => {
        return submission.score < lowest.score ? submission : lowest;
    }, array[0]);
}
//8
function findAverageScore(array) {
    const totalScore = array.reduce((sum, submission) => sum + submission.score, 0);
    return totalScore / array.length;
}
//9
function filterPassing(array) {
    return array.filter(submission => submission.passed);
}
//10
function filter90AndAbove(array) {
    return array.filter(submission => submission.score >= 90);
}
//11
function createRange(start, end) {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
//12
function countElements(array) {
    return array.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

//tests
//1
console.log(submissions);
//2
addSubmission(submissions, 'Jim', 45);
console.log(submissions);
//3
deleteSubmissionByIndex(submissions, 1);
console.log(submissions);
//4
deleteSubmissionByName(submissions, 'Jack');
console.log(submissions);
//5
editSubmission(submissions, 1, 85);
console.log(submissions);
//6
console.log(findSubmissionByName(submissions, 'Jane'));
//7
console.log(findLowestScore(submissions));
//8
console.log(findAverageScore(submissions));
//9
console.log(filterPassing(submissions));
//10
console.log(filter90AndAbove(submissions));
//11
console.log(createRange(5, 10));
//12
console.log(countElements(['a', 'b', 'a', 'c', 'a', 'b']));
console.log(countElements([1, 1, 1, 2, 2, 3]));
