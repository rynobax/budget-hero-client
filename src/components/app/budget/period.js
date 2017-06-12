export const Periods = [
  {
    name: 'Daily',
    value: 1,
    days: 1
  },
  {
    name: 'Weekly',
    value: 2,
    days: 7
  },
  {
    name: 'Monthly',
    value: 3,
    days: 30
  },
  {
    name: 'Yearly',
    value: 4,
    days: 360
  },
  {
    name: 'Percent',
    value: 5,
    days: null
  }
];

export const getPeriodByValue = (value) => {
  return Periods.reduce((prev, period) => {
    if(period.value == value){
      return period;
    }else{
      return prev;
    }
  }, null);
};

export const getPeriodByName = (name) => {
  return Periods.reduce((prev, period) => {
    if(period.name.toLowerCase() == name.toLowerCase()){
      return period;
    }else{
      return prev;
    }
  }, null);
};

export const getAdjustedValue = (fromAmount, fromPeriod, toPeriod) => {
  const fromPeriodObj = getPeriodByName(fromPeriod);
  if(fromPeriodObj == null) throw('Invalid fromPeriod: ' + fromPeriod);
  const fromPeriodDays = fromPeriodObj.days;

  const toPeriodObj = getPeriodByValue(toPeriod);
  if(toPeriodObj == null) throw('Invalid toPeriod: '+ toPeriod);
  const toPeriodDays = toPeriodObj.days;

  return fromAmount * (toPeriodDays / fromPeriodDays);
};
