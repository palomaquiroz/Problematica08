/********************************
a. Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase).
*********************************/
var myString = "Radium Rocket";
console.log(myString.toUpperCase());

/********************************
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*********************************/
var otherString = "Hello World!";
var shortString = otherString.substring(0, 5);
console.log(shortString);

/********************************
c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*********************************/
var albertQuote = "If you can't explain it to a six year old, you don't understand it yourself";
var elf = albertQuote.substring(72, 75);
console.log(elf);

/********************************
d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).
*********************************/
var anotherString = "javascript is cool";
var firstLetter = anotherString.substring(0,1);
var restOfString = anotherString.substring(1);
var completeString = firstLetter.toUpperCase() + restOfString.toLowerCase();
console.log(completeString);

/********************************
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*********************************/
var abrahamQuote = "Whatever you are, be a good one";
var firstWhiteSpace = abrahamQuote.indexOf(" ");
console.log(firstWhiteSpace);

/********************************
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +).
*********************************/
var maryPoppins = "supercalifragilistic expialidocious";
var firstUp = maryPoppins.substring(0,1);
var secondUp = maryPoppins.substring(21,22);
var firstLows = maryPoppins.substring(1, 20);
var restOfLows = maryPoppins.substring (22, 35);
var maryQuote = firstUp.toUpperCase() + firstLows.toLowerCase() + " " + secondUp.toUpperCase() + restOfLows.toLowerCase();
console.log(maryQuote);
console.log(maryQuote.indexOf(" "));