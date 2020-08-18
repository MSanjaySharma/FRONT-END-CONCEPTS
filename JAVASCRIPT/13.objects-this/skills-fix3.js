const developer = {
    id: 1, 
    name: 'mani', 
    skills: ['js','react'],
    details: function(){

        //use a bind method on available on all function regardless of their place of definition and declaration and change their default binding to another object;

        //syntax === function(){}.bind(object)

        
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)
        }.bind(this));
    }
}

developer.details();

/* 
output---
mani knows js
mani knows react
*/