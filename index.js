const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo']));
console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo']));

const createFareMultiplier = function fareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

const fareDoubler = createFareMultiplier (2)

const fareTripler = createFareMultiplier (3)

const selectDifferentDrivers = function (drivers, selectingFunction) {
  return selectingFunction(drivers);
}


