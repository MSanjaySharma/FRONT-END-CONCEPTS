//         re asssign re declare hoisting  scope

// var      yes         yes     yes  function
//let       yes         no      no   block
//const     no          no      no   block

function greet(){
    var msg='Hello there';
    console.log(msg)  }  
    //calling a function invoking a function
    greet(); //hello there

function article(){
    let title ='java script is awesomwe';
    console.log(title);

}
//console.log(title); //referece error 

article();//'javascript is awesome

let a="san"
a.split()