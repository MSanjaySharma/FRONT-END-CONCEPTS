//var


function greet(){
    var msg='Hello there';
    if(true)
    {
        var msg="hello there"
        console.log("inside block (if)",msg);
    }
    console.log("outside block (if)",msg);
}

//let

function greet(){
    var msg='Hello there';
    if(true)
    {
        let msg="hello there";
        console.log("inside block (if)",msg);
    }

    //console.log("outside block (if)",msg);===========throws error referece error
}
    greet(); //hello there



//my own

function greet(){
    var msg='Hello there';
    for(let i=0; i<1;i++)
    {
        let msg="hello there";
        console.log("inside block (if)",msg);
    }
    //console.log(i); throws error since a let is defined
    //if var i was used it would not throw error

    //console.log("outside block (if)",msg);===========throws error referece error
}
    greet(); //hello there

//