//Caos any
let anyValue: any;
anyValue = 3;
anyValue = "string";
anyValue = 5;

let stringTest: string = "verification";
stringTest = anyValue;

//Unknown value
let unknownValue: unknown;
unknownValue = 3;
unknownValue = "hello";
unknownValue = true;
unknownValue = "world";

let stringTest2: string = "hey";
// stringTest2 = unknownValue;

//unknown needs a validation of type
if (typeof unknownValue === "string") {
  stringTest2 = unknownValue;
}
