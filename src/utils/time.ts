function getFormattedTime(date: Date): string {
  const hour = date.getHours() % 12;
  const minute = date.getMinutes();
  const period = date.getHours() > 12 ? "PM" : "AM";

  return `${hour}:${minute} ${period}`;
}

export { getFormattedTime };
