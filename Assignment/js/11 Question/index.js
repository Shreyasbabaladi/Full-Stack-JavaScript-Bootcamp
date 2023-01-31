// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date()

console.log(`
Year:- ${ date.getFullYear()}
Month:- ${date.getMonth()+1}
Date:- ${date.getDate()}
Hours:-${date.getHours()}
Minutes:- ${date.getMinutes}
${date.getTime() / 1000}seconds elapsed from January 1, 1970 to now
`);
