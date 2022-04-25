const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   //imprimir el nombre de cada Explorer de la lislta
   explorers.forEach(explorer => {
       console.log(explorer.name);
   });
   //imprimir el stack de cada Explorer de la lista
    explorers.forEach(explorer => {
        console.log(`${explorer.name} y tiene cursos como ${explorer.stack}`);
    });
//crear un nueva lista con listas de stacks de cada explorer Map
const stackList = explorers.map(explorer => {
    return explorer.stack;
})
console.log(stackList);
//buscar el primer explorer que sea de la CDMX usando FIND 
const explorerCDMX = explorers.find(explorer => {
    return explorer.city === "CDMX";
})
console.log(explorerCDMX);
//suma de los exercises_completed de los exploradores
const initValue=0;
const sumaExercise=explorers.reduce((acc,explorer)=>acc+explorer.exercises_completed,initValue);
console.log(sumaExercise);
//obtener la validacion si al menos unos de los explorers tiene propiedad exercisesFinished en true usar SOME
const someExercise = explorers.some(explorer => {
    return explorer.missions.frontend.exercisesFinished === true;
});
console.log(someExercise);
//obtener la validacion si todos los explorers tienen propiedad isFinished del onboarding como true EVERY  
const everyOnboarding = explorers.every(explorer => {
    return explorer.missions.onboarding.isFinished === true;
});
console.log(everyOnboarding);