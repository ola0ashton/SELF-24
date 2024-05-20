const person = {
    name: "Olayemi Harrison",
    age: "27",
    gender: "Female",
    description:  'Nice,caring, friendly and  loving individual',
    languages: ["JavaScript", "Love", "Java", "C++", "HTML", "CSS" , "English", "Yoruba"],
    hobbies: ["Reading", "Coding", "Learning", "Sleeping", "Watching movies", "Spending money"],
    skills: [ 'ability to do things related to technology'],
    capabilities: {
        reading: true,
        learning: true,
        coding: true,
        cooking: true
    },
    experience: 26, 
    occupation: 'student',
    
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    introduce: function() {
        return `I am ${this.name}, age ${this.age} years  old, gender ${this.gender}. and description ${this.description}`;
    },
    listLanguages: function() {
        return `I am proficient in the following languages: ${this.languages.join(", ")}.`;
    },
    addLanguage: function(newLanguage) {
        this.languages.push(newLanguage);
    },
    listHobbies: function() {
        return `My hobbies include: ${this.hobbies.join(", ")}.`;
    },
    addHobby: function(newHobby) {
        this.hobbies.push(newHobby);
    },
    listSkills: function(){
        return `My skills include: ${this.skills.join(", ")}.`;
    },
    addSkill: function(newSkills) {
        this.skills.push(newSkills);
    },
    showCapabilities: function() {
        let capabilitiesList = "";
        for (let capability in this.capabilities) {
            capabilitiesList += `${capability}: ${this.capabilities[capability] ? "Yes" : "No"}\n`;
        }
        return `My capabilities are:\n${capabilitiesList}`;
    },
    increaseExperience: function(years) {
        this.experience += years;
        return `My experience has been increased to ${this.experience} years.`;
    },
    showOccupation: function(){
        return `I am currently ${this.occupation}.`;
    },
};

console.log(person.greet())
console.log(person.introduce());
console.log(person.listLanguages());
console.log(person.listHobbies());
console.log(person.listSkills());
console.log(person.showCapabilities());
console.log(person.showOccupation());


console.log("\nAdding a new language...");
person.addLanguage("Korean");
console.log(person.listLanguages());

console.log("\nAdding a new hobby...");
person.addHobby("Eating");
console.log(person.listHobbies());

console.log("\nAdding a new skill...");
person.addSkill("Software Development");
console.log(person.listSkills());

console.log("\nIncreasing experience...");
console.log(person.increaseExperience(1));

console.log("\nAdding a new occupation...");
person.occupation("Developer");
console.log(person.showOccupation);
