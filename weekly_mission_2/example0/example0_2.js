console.log ("2) Creacion de un objeto con propiedades");

const explorer = {
    name: 'Damian',
    age: 25,
    mission: "Node JS",
    stack: ["js", "node", "react", "vue"],
    blog: {
        url: "https://pdamianreyes.github.io/my_launchx_blog/",
        post: 1
    }
}

console.log (explorer)
console.log ("Accediendo a las propiedades del obejto")
console.log (explorer.name);
console.log (explorer["name"]);

//--------------------------
const ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    sayHelloToExplorers: function () {
        console.log ("Soy el ajolonauta, que onda!");
    },
    tellMeMore: function(){
        return `Ajolonauta: ${this.name}`
    }
}


console.log ("Ajolonauta:")
console.log (ajolonauta);
ajolonauta.sayHelloToExplorers()
console.log (ajolonauta.tellMeMore());