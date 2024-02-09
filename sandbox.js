// console.log() og tekst i javascript
//oppgave 1
console.log('hello world')
//oppgave 2
console.log('afternoon');

//console.log(result);

//oppgave 3
let en = "en";
let to = "to";
let result = en.concat(to)
// det betyr at de blir kombinert 
// tallene og bokstavene blir kombinert 
// den første variabelen blir kombinert med den andre 
//oppgave 4
//console.log('Geir Hilmersen er'+ 42 'år gammel>!');
//geir himersen er 42 år gammel

//variabler 
//oppgave 1 
let x = 5;
let y = 6;
let z = x + y;
//oppgave 3 
//oppgave 4
// var er funksjonsomfang, mens let er blokkomfang
// variabler som eklæreres med var tilhører det globele omfanget når de defineres utenfor en funksjon, mens variabler som eklareres med let gjør ikke dette 
// det anbefalles å bruke let 
//oppgave 5
  // en variabel er et navngitt lagersted for å holde en verdi i javascipt 
  // en konstant er også et navngitt lagersted for å holde en verdi men i motsetning til variabel til en konstant ikke endres etter tildeling 
  // oppgave 6 
  //string, number, boolean.
   //oppgave 7 
   //a)
 let = null
 // null er en verdi for det ikke noe verdi
// undefined betyr at en variabel er dekarert men ingen verdi












//arrays 1 grunnlegene om arrays 

//oppgave 1
//a)
// hensikten med en array er et element som kan holde mere en variabel 
//b)  javascipt arrays kan inneholde elementer av forskjellige datatyper, du kan ha tall strenger objekter og andre arrays i samme array 
//oppgave 2 
//deklarer og indekser en tom array?
// a)
//let liste =['donald', 'dolly','skrue','ole','dole','doffen' ]
//let tomarray = [];
//tomarray.push('element 1');
//tomarray.push('element 2');
//console.log(tomarray[0]);
// den første indexen i en array er 0 
// den andre indexen i en array er 1 
// egenskapen length data av en array representerer nummere av elementer i en array 
const vegger = ['vegg 1', 'vegg 2', 'vegg 3', 'vegg 4'];
console.log(vegger.length);
// dette oppretter en variabel 'tom array' og tildeler den en tom array ved hjelp av array litretalen [] 
// push metoden legger til elementer på slutten av arrayen 
// den siste elemente er at valutaen av en arrays lengde er minus 1
// b)
// oppgave 5 
//a)
console.log(typeof vegger)
//b)














//boliske verdier og sammenligning 


//oppgave 1 
// a)
console.log(1 === 1);
//true
//b)
console.log(1 === 2 );
// false 
//c)
console.log(3==3)
// true
// D)
console.log (2==3);
// false

//oppgave 2 
// a)
console.log(1=='1');
// true
// b )
console.log(2==='2')
// false
// c)
console.log(2===1);
console.log(2==2);
//oppgave 3
//a)
console.log(1==1 && 2==2) 
// true
// b)
console.log(1==='1' && 2==2)
// false
//c)
console.log(1==='1' && 2===2)
//false
//d)
console.log(1=== '1' && 2=='2')
//false
// oppgave 4
// a)
console.log(1==='1' || 2===2)
// true
// b)
console.log(2=='2' || 1==='1');
// true
// c)
console.log(2===2 || 1===1 || 3==='3');
// true
// d)
// oppgave 5 
// a)
console.log(1 !== 1);
//false
// b)
console.log(2 !== 1);
// true
// c)
console.log(2 !== 1 && 1 === 1)
// true
//d)
console.log(2!== '2' && 1=== '1' || 2=='2')
// if else 
// a)
//function checkvalue(a, b){
  //  if (a===1)
    //if (a===2)
    //console.log('a is 1 and b is 2');
//else
//console.log('a is not 1');
//}

//function checkvalue (a,b) {
//}if(a===1) 
  //  if (b===2) {
//console.log('a is 1 and b is 2 ');

//}
 //else {
//console.log ('a is not 1');
//}



let navn = "navn"
let tall = 1 

if (typeof(navn) == "string"){
    console.log("STRING STRING STRING!")
}
else{
    console.log("dette er ikke en string i det hele tatt")
}
// a)
// b)
// c)
if (typeof(tall) == "string"){
    console.log("string string string!")
 }   
else{
    console.log("dette er ikke en string i det hele tatt");
}


if(typeof(navn) == typeof(tall)){
    console.log("variablene du brukte er av samme type");
}
else{
    console.log("variablene du brukte er ikke samme type")
}
// a) 
// variablene du brukte er samme type
// b)



let 







//true
//FLYTTCONTROL, LOOPS
//oppgave 1
// for statment 
// the initializing expression initialization, if any are executed. This express usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity, this expression can also declare variables 
// the condition expression is evaluated if the value of condition is true the loop statement execute otherwise the for loop termitates.(if the condition expression )



