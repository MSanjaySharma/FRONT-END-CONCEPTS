/* 
CODE WARS SOLUTIONS
function test(str) {
    let countNum = str.match(/[0-9]/g).length;
    let countAlp = str.match(/[a-z]/gi).length;
    return({countNum, countAlp});
}

console.log(test("123glo6bal")); 
*/

/* //triple trouble 
function tripleTrouble() {
    let result = "";
    for(let i = 0 ; i < arguments[0].length ; i++){
        for(let j = 0 ; j < arguments.length ; j++){
                result += arguments[j][i];
        }
    }
    return(result);
}

console.log(tripleTrouble("sanjay", "sharma", "111111")); */

//console.log(tripledouble(451999277,41177722899));

/* 
//wolf in disguise
function woldInDisguise(arr){
    if(arr[arr.length-1]==="wolf")
        return( "Pls go away and stop eating my sheep");
    return(`Oi! Sheep number ${queue.length-queue.indexOf("wolf")-1}! You are about to be eaten by a wolf!`);
} */
