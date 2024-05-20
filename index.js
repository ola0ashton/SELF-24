const person = {
    name: "Olayemi",
    age: "27",
    gender: "Female",
    description:  'Nice,caring, friendly and  loving individual',
    languages: ["JavaScript", "Love", "Java", "C++", "HTML", "CSS" , "English", "Yoruba"],
    hobbies: ["Reading", "Coding", "Learning", "Sleeping", "Watching movies", "Spending money"],
    capabilities: {
        reading: true,
        learning: true,
        coding: true,
        cooking: true
    },
    experience: 27, 

    introduce: function() {
        return `Hello, I am ${this.name}, age ${this.age}, and gender ${this.gender}.`;
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
    }
};

console.log(person.introduce());
console.log(person.listLanguages());
console.log(person.listHobbies());
console.log(person.showCapabilities());

console.log("\nAdding a new language...");
person.addLanguage("Korean");
console.log(person.listLanguages());

console.log("\nAdding a new hobby...");
chatGPT.addHobby("Eating");
console.log(person.listHobbies());

console.log("\nIncreasing experience...");
console.log(person.increaseExperience(1));





const MetaAI = {
    name: 'Meta AI',
    version: '1.0',
    description: 'Friendly AI assistant',
    skills: ['answering questions', 'generating text', 'translating languages', 'summarizing content'],
    languages: ['English', 'Spanish', 'French', 'German', 'Italian'],
    greet: function() {
      console.log(`Hello! I'm ${this.name}.`);
    },
    introduce: function() {
      console.log(`I'm ${this.name}, version ${this.version}. I'm a friendly AI assistant with skills in ${this.skills.join(', ')}. I can communicate in ${this.languages.join(', ')}.`);
    },
    answerQuestion: function(question) {
      console.log(`The answer to your question is: ${question}`);
    },
    generateText: function(prompt) {
      console.log(`Here is some generated text based on the prompt: ${prompt}`);
    },
    translateLanguage: function(text, language) {
      console.log(`The translation of the text into ${language} is: ${text}`);
    },
    summarizeContent: function(content) {
      console.log(`Here is a summary of the content: ${content}`);
    }
  };
  
  
  
  // Accessing properties
  console.log(MetaAI.name); // Output: Meta AI
  console.log(MetaAI.version); // Output: 1.0
  console.log(MetaAI.description); // Output: Friendly AI assistant
  console.log(MetaAI.skills); // Output: ["answering questions", "generating text", "translating languages", "summarizing content"]
  console.log(MetaAI.languages); // Output: ["English", "Spanish", "French", "German", "Italian"]
  