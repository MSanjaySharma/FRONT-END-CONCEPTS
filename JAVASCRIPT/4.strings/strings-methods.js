/* 

        s   a   n   j   a   y   s   a   n
        0   1   2   3   4   5   6   7   8
        9   8   7   6   5   4   3   2   1                           //negative

*/
//IMP>>>>>>>>>>>>all string methods are immutable methods on the String object<<<<<<<<<<<<<<<<
"use strict";
const stringToTest = "sanjaysan";

//length is a property of the object String;
console.log(stringToTest.length); //6

//toUpperCase()
console.log(stringToTest.toUpperCase()); //"SANJAYSAN"

//toLowerCase()
console.log(stringToTest.toLowerCase()); //"sanjaysan"

//indexOf()
console.log(stringToTest.indexOf("an")); //1 ====its a number

//lastIndexOf()
console.log(stringToTest.lastIndexOf("s")); // index will be returned of last occurence 6 i.e === its a number

//search()
console.log(stringToTest.search("an")); //1 === its a number ===  returns only the first match

//charAt()
console.log(stringToTest.charAt(4)); //a==returns string

//includes()
console.log(stringToTest.includes("ay")); //returns a bool saying true or false===it says true

//repeat()
console.log(stringToTest.repeat(3)); //"sanjaysansanjaysanjsanjaysan"

/* 

EXTRACTING STRING PARTS

*/

//slice(begin,end)
console.log(stringToTest.slice(0, 4)); //first index will be included and last index will not be included //sanj
console.log(stringToTest.slice(0, -6)); //san //key take away ===negative indexes work too

//slice(begin)
console.log(stringToTest.slice(5)); //ysan
console.log(stringToTest.slice(-6)); //jaysan

//substring(start,end) ===same like slice but no negative indexes it accepts
console.log(stringToTest.substring(5)); //ysan
console.log(stringToTest.substring(0, 5)); //sanja
console.log(stringToTest.substring(-1, -5)); //doesnt show error and doesnt print anything either //very risky behaviour >>avoid it with negative numbers at all costs IMPPP:::even strict mode doesnt doesnt throw an error

//substr(begin,length)
console.log(stringToTest.substr(0, 3)); //san
console.log(stringToTest.substr(0, -1)); //doesnt throw error even in strict mode for using negative length//doesnt print any error
console.log(stringToTest.substr(-9, 3)); //takes negative indexes but no negative lengths

//replace(present,withnew)
console.log(stringToTest.replace("an", "123")); //only the first instance of the item is replaced and not others //s123jaysan

//converting string to array
//split("");
console.log(stringToTest.split()); //array ["sanjaysan"] //only one element
console.log(stringToTest.split("a")); //splits string along a and doesnt include a in the return array //Array(4) ["s", "nj", "ys", "n"]
