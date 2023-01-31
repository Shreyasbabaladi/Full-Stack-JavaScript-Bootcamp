// 15. Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

function getGrade(score) {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score <= 89) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 50 && score <= 59) {
    return "D";
  } else if (score >= 0 && score <= 49) {
    return "F";
  } else {
    return "Invalid score";
  }
}

function getGrade2(score) {
  return score >= 80
    ? "A"
    : score >= 70
    ? "B"
    : score >= 60
    ? "C"
    : score >= 50
    ? "D"
    : score >= 0
    ? "F"
    : "Invalid score";
}

function getGrade3(score) {
  const grades = {
    A: [80, 100],
    B: [70, 89],
    C: [60, 69],
    D: [50, 59],
    F: [0, 49],
  };

  for (let grade in grades) {
    if (score >= grades[grade][0] && score <= grades[grade][1]) {
      return grade;
    }
  }

  return "Invalid score";
}
