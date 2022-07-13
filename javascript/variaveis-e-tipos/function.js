var firstName = "João";
let lastName = "Souza" //escopo global

if (firstName === "João") {
  let lastName = "Rodrigues" //escopo de bloco
  var firstName = "Pedro";
  lastName = "Silva" //redeclaracao

  console.log(lastName)
}

console.log(firstName, lastName)