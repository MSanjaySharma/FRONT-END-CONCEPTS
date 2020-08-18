const developer = {
    id: 1, 
    name: 'mani', 
    skills: ['js','react'],
    details: function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)
        })
    }
}

developer.details();