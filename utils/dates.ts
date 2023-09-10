/**
 * Gets the time diff between the given date and the current date in full years.
 */
export const getTimeDiffInYears = (
  date: ConstructorParameters<typeof Date>[0]
) => {
  const time = new Date(date).getTime();
  const timeDiff = Date.now() - time;
  const millisecondsFromEpoch = new Date(timeDiff);
  return millisecondsFromEpoch.getUTCFullYear() - 1970;
};
