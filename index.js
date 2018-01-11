// write your code below!
function happyHolidays()
{
  //the value of happyHolidays will be equivalent to 'Happy holidays!'
  return 'Happy holidays!';
}
function happyHolidaysTo(name)
{
  // the value of happyHolidaysTo will be equivalent to 'Happy holidays, you!'
  // we use a parameter
  return "Happy holidays, ${name}!";
}
function happyHolidayTo(holiday, name)
{
  return "Happy ${holiday}, ${name}!";
}
function holidayCountdown(holiday, days)
{
  let qtyOfDays = days.toString();
  return "It's ${qtyOfDays} days until ${holiday}!";
}