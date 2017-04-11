console.log("Hello Main JS")

var greeting="hello";
console.log(greeting);
var hoursInYear=24*365;
console.log(hoursInYear);
var minsInDecade= hoursInYear *60*10;
console.log("minsInDecade",minsInDecade);
var age = "8";
var secondsInyear =(hoursInYear * 60) * 60;
var ageInSeconds = secondsInyear * age;
console.log(ageInSeconds);

var  veryWiseAge = 35;
if (age > veryWiseAge){
	console.log("you are very wise");
} else if(age === 8){
	console.log("you are magical age")
}else if  (age < veryWiseAge) {
	console.log("you are young my preetty");
}  

var myNumber = 2;
var myOtherNumber ="2"
 console.log(myNumber + myOtherNumber);
 console.log (myNumber + +myOtherNumber);

 var myJunkDrawer =[3, "dime",'sock',true, null,"28","box of toothpicks"];
 console.log("myJunkDrawer", myJunkDrawer);
 console.log("howmany",myJunkDrawer.length);
 console.log("first item", myJunkDrawer[0]);



