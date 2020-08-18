const developer = {
    id: 1, 
    name: 'mani', 
    skills: ['js','react'],
    callBac(skill){
            console.log(this);
            console.log(`${this.name} knows ${skill}`);
    },
    details: function(){
        this.skills.forEach(this.callBac.bind(this));
    },
    details2: function(){
        this.skills.forEach(function (ele) {
            console.log(`${this.name}`);
        });
    },
    details3: function(){
        this.skills.forEach((ele) => {
            console.log(`${this.name}`);            //arrow function dont have this keyword but they inherit it from the outer scope in which they are defined
        });
    },
    details4: function(){
        callbackglobal(); ;
    },
};

let callbackglobal= ()=>{
    console.log(this); 
};

let sanjay = function () {
    console.log(this);
};

developer.details();        //here the function call to callBac occurs inside the details method hence the callBac is binded to global object rather than the local local object;
developer.callBac();       //here this===object is true

/* output----
undefined knows js
undefined knows react 
*/

developer.details2();

developer.details3();

callbackglobal();

developer.details4();

sanjay();