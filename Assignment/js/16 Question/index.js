// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

// useing arry
const Autumn = ["September", "October", "November"];
const Winter = ["December", "January", "February"];
const Spring = ["March", "April", "May"];
const Summer = ["June", "July", "August"];

const seasonChecker = (month) =>
  Autumn.includes(month)
    ? "Autumn"
    : Winter.includes(month)
    ? "Winter"
    : Spring.includes(month)
    ? "Spring"
    : Summer.includes(month)
    ? "Summer"
    : "Please provod valid input";

// console.log(seasonChecker("June"));

//using object
const seasonChecker2 = (month) => {
  const months = {
    Autumn: ["September", "October", "November"],
    Winter: ["December", "January", "February"],
    Spring: ["March", "April", "May"],
    Summer: ["June", "July", "August"],
  };

  for (const season in months) {
    if (months[season].includes(month)) {
      return season;
    }
  }
};

seasonChecker2("December");
