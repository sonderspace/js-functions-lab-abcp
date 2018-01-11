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
  return 'Happy holidays, ${name}!';
}
function happyHolidayTo(holidayParameter, name)
{
  return 'Happy ${holidayParameter}, ${name}!';
}
function holidayCountdown(holidayParameter, amountOfDays)
{
  amountOfDays = amountOfDays.toString();
  return "It's ${amountOfDays} days until ${holidayParameter}!";
}
/*
describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })

  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })

  describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})
*/