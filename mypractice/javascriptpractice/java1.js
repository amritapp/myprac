console.log("Java1.js");

var testThisNumber="19";
var splitIntoArray= testThisNumber.split("");
console.log("array1",splitIntoArray);

for (var i=0; i < splitIntoArray.length; i++) {
	splitIntoArray[i] = Number(splitIntoArray[i]);
}
	console.log("splitIntoArray after:",splitIntoArray);
