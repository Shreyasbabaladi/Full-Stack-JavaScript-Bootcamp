// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const arr7 = ['LCO', 'inureon', 'pw skills', 'udemy', 'hankerRank','pw skills' ] 
console.log(`
The first occurrence of pw skills:- ${arr7.lastIndexOf('pw skills')}
The last occurrence of pw skills:- ${arr7.findIndex((e) => e === 'pw skills')}
`);