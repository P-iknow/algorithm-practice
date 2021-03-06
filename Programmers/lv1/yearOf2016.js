const WEEK = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
const MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const solution = (month, day) => {
  const sumOfDays = MONTH.slice(0, month - 1).reduce((prev, curr) => {
    return prev + curr;
  }, day);

  const answer = WEEK[(sumOfDays - 1) % 7];
  return answer;
};

solution(5, 24);
