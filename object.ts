// write a program that print all the car campany and year number from the list.
type carType =  {campany?: string, isUsedCar: boolean, year: number};
var cars:carType[] = [{
    campany: "Honda",
    isUsedCar : true ,
    year:  2022
}, {
    campany:"Toyota" ,
    isUsedCar: false ,
    year: 1998,
}, {
    campany :"Ford" ,
    isUsedCar:true ,
    year: 1985 ,
}, {
    campany :"BMW" ,
    isUsedCar:false ,
    year: 2012,
}, {
    campany :"Audi" ,
    isUsedCar:true ,
    year: 2006,
}, {
    campany :"Volvo" ,
    isUsedCar:false ,
    year: 2012,
} , {
    campany :"Mercedes-Benz" ,
    isUsedCar:true ,
    year: 2013 ,
}
]
for(let i = 0; i < cars.length; i++) { 
    console.log(cars[i].campany,cars[i].year);
    
}