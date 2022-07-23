"use strict";
//Caos any
let anyValue;
anyValue = 3;
anyValue = "string";
anyValue = 5;
let stringTest = "verification";
stringTest = anyValue;
//Unknown value
let unknownValue;
unknownValue = 3;
unknownValue = "hello";
unknownValue = true;
unknownValue = "world";
let stringTest2 = "hey";
// stringTest2 = unknownValue;
//unknown needs a validation of type
if (typeof unknownValue === "string") {
    stringTest2 = unknownValue;
}
