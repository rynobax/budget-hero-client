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
    days: 365
  }
];

export const getPeriodByValue = (value) => {
  return Periods.reduce((prev, period) => {
    if(period.value.toString() == value.toString()){
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
