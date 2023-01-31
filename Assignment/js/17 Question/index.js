// 17. Write a program which tells the number of days in a month.

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  console.log(daysInMonth(2023, 00));