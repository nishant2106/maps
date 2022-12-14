const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carsByMake.pop();

//  prevent inCompatible values

// myCar?.push(100);

//help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexible types
const importantDates: (string | Date)[] = [new Date(), "2030-10-30"];
