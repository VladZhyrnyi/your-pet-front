export const calcAge = data => {
  const [day, month, year] = data.split('.');
  const newDateFormat = new Date(`${year}-${month}-${day}`);

  const newDateMs = newDateFormat.getTime();

  const ageMs = Date.now() - newDateMs;

  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const millisecondsInMonth = 24 * 60 * 60 * 1000 * 30.44;
  const formatBdYearsFloor = Math.floor(ageMs / millisecondsInYear);
  const formatBdMonthFloor = Math.floor(ageMs / millisecondsInMonth);

  if (formatBdYearsFloor < 1) {
    if (formatBdMonthFloor <= 1) return `${formatBdMonthFloor} m`;
    if (formatBdMonthFloor > 1) return `${formatBdMonthFloor} m`;
  }

  if (formatBdYearsFloor === 1) return `${formatBdYearsFloor} year`;

  if (formatBdYearsFloor > 1) return `${formatBdYearsFloor} years`;
};
