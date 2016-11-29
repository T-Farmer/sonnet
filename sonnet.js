var theSonnet = document.getElementById("sonnet").innerHTML
console.log(theSonnet);

console.log("orphans", theSonnet.indexOf("orphans"))

var numOfCharacters = theSonnet.length
console.log("numOfCharacters", numOfCharacters)

var newSonnet = theSonnet.replace("winter", "yuletide")
console.log("newSonnet", newSonnet);