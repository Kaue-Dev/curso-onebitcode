//Array
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

//Modo normal
console.log(towns);
//Usando spread
console.log(...towns);
//Usando spread no primeiro elemento
console.log(...towns[0]);

//Clonando array com spread
const townsClone = [...towns]
townsClone.push("Aldebaran")
console.log({ towns, townsClone });

//Usando spread em objeto
const townsObject = {...towns}
//Clonando objeto
const townsObjectClone = {...townsObject}
townsObjectClone.test = "Test"
console.log({townsObject, townsObjectClone});