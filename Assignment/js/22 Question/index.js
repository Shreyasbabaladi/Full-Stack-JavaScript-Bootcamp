// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedArr = ages.sort();

let minAge = sortedArr[0]; 
let maxAge = sortedArr[sortedArr.length -1];

let averageAge = sortedArr.reduce ((acc, curr)=> (acc+curr), 0) / 2;


console.log(`
The min age ${minAge}
The max age ${maxAge}
The median age ${Math.floor((minAge+maxAge )/ 2)}
The average age ${averageAge}
Range of the ages (${maxAge},${averageAge},${minAge})
Compare the value of (min - average):- ${ Math.abs(minAge - averageAge)} (max - average):- ${ Math.abs(maxAge - averageAge)}
`);