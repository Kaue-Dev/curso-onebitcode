const user = {
    name: "John Doe",
    age: 42,
    email: "doejohn@email.com",

    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998765432"
    },

    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }] 
}
//Forma normal, com erro
//console.log(user.friends[0].phone.ddd);
//Forma moderna com ?.
console.log(user.friends[0].phone?.ddd);
console.log(user.brothers?.[1].name);