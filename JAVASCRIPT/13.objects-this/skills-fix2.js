const developer = {
    id: 1, 
    name: 'mani', 
    skills: ['js','react'],
    details: function(){
        //use a dummy variable to store the value of this keyword before its value changes in the function call;use a const since the value of the dummy doesn't change;
        //usually it's a practice to use the variable name as "that";
        //i.e const that = this;
        //but thats even more consfusing so rather use a good alternative name
        const dev = this;
        this.skills.forEach(function(skill){
            console.log(`${dev.name} knows ${skill}`)
        })
    }
}

developer.details();

/* 
output---
mani knows js
mani knows react
*/