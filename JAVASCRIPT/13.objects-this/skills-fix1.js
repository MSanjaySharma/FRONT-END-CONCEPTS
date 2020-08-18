const developer = {
    id: 1, 
    name: 'mani', 
    skills: ['js','react'],
    details: function(){
        //solution 1==don't use a call back function or for that matter any function call from outside the object inside any methods........ that's very convinient;
        for(let i = 0 ; i < this.skills.length ; ++i){
            console.log(`${this.name} knows ${this.skills[i]}`);
        }
    }
}



developer.details();

/* 
output---
mani knows js
mani knows react
*/