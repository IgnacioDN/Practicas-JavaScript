console.log({"username": "ryan", "score": 80.9});

//array
//abajo tenemos variables
var username = "nacho";
let lastname = "diaz neila";
console.log(username + " " + lastname);

var id = "Ignacio Agustin"
let fullId = "Diaz Neila"
console.log(id + " "+ fullId);

const PI = 3.13;
const number = 900; 

console.log(PI);
console.log(number);
// const fija un valor 

let favouriteClub = "River Plate";
// camel case (cuando va minusc y desp mayusc);
  /*
esto sirve para comentarios de varios renglones

  */ 
// esto de abajo son operadores

 let numberOne = 1;
 let numberTwo = 100;

 
 let result = numberOne > numberTwo;
 console.log(result); 

 let musicAlbum = "WhiteAlbum";
 let musicAlbum2 = "RubberSoul";

 let albumOftheyear = musicAlbum == musicAlbum2;
 console.log (albumOftheyear);

 let favouriteArtist = "Cerati";
 let favouritePlayer= "Messi"; 

 let entertainment = favouriteArtist != favouritePlayer;
 console.log (entertainment); 


 // condicionales //

 let passwordDB = "pelusonofmilk";
 let input = "signos"; 

 let resultado = input == passwordDB; 

 if (resultado == true) { 
   console.log ("Login Correcto")
 } else {
   console.log("Contraseña Incorrecta")
 } 
 let username1 = "Nacho";
 let username2 = "Nacho";

 let logIn = username1 == username2;


 if (logIn != true) {

  console.log ("Login Succesful")
 }
 else { 
   console.log ("Login Incomplete")
 } 

 let passport1 = "Argentina";
 let passport2 = "Brasil";

 let ticketsFor = passport1 != passport2;
    if (ticketsFor == true) {
      console.log ("the citizen get the tickets to fly")
    } else {
      console.log("there's no tickets available for that condition")
    }

 var creditCard = "Visa";
 var debitCard = "Visa";

 var purchaseWith = creditCard == debitCard;

 if (purchaseWith === true) {

  console.log ("Compra con Visa")
 }
console.log(purchaseWith); 

if (purchaseWith === false) {
  console.log ("Pago con Mercado Pago");

}

console.log(purchaseWith); 

var environment1 = "googleChrome";
var environment2 = "mobileApp";

var testingWith = environment1 == environment2; 

if (testingWith === true) {
  console.log("insufficient evidence")
} else {
  console.log("sufficient evidence")
}
console.log(testingWith);

let score = 10; 
// else if control de flujo 

if (score > 30) {
  console.log ("keep on playing")
}
 else if (score > 15) {
  console.log ("you need to practice")
}
else { console.log ("try to read the tutorial")
}

const valueOfTheRent = 40000;
       if(valueOfTheRent > 40000) {
          console.log("i can afford it")
        } else if (valueOfTheRent > 30000) {
          console.log ("great proposal")
        }
        else {console.log ("im gonna still looking for")}; 

let typeOfCard = "mercadoPago"; 
   switch (typeOfCard) {
     case "debitCard": 
     console.log ("this is a DebidCard");
     break; 
       case "creditCard":
         console.log ("this is a creditCard");
         break;
         default: console.log("No card");
   } 

   var testsDePerformance = "googleInsights";
    switch (testsDePerformance) {
      case "googleInsights": 
      console.log ("test de performance con GoogleInsights")
       break;
         case "webTest": 
          console.log(" test de performance con WebTest")
           default: console.log("GtMetrix");
    } 

      const bugReports = "done";
         switch (bugReports) {
           case "done" : console.log ("lets work out in another website")
           break; 
           case "inProcess": console.log ("we have to ensure that the website respons")
           break;
           default : console.log ("lets start")
         }
    //bucles//

    let count = 10;
    while (count > 0) {
      console.log ("Hello World")
      count = count - 1;
    }
    //arrays// iterar en datos "for"

    let footballClubs = ["river", "boca", "racing"];
       console.log(footballClubs.length);

       for (let miIndice = footballClubs.length - 3; miIndice >= 0; miIndice--) {
         console.log(footballClubs[miIndice]);

        }
        var users = ["juan", "francisco", "blas"]
        console.log(users.length)
        for (var x= users.length - 3; x>= 0; x --) {
          console.log(users[x]);
        }

        var mobilesModels = ["iphone", "samsung", "huawei"];
          console.log(mobilesModels.length);
             for (let x = mobilesModels.length - 1 ; x >= 0; x--) {
               console.log(mobilesModels[x]);
             }
             // funciones
             function greeting (usuarios) {
               console.log( "hello" + " " + usuarios);
             }
             greeting("celina");
             greeting("juan");
             greeting ("tomas"); 

             function add (x1, x2) {
               console.log(x1, x2)
             }
             add (9 + 10);
             add (10000 + 8920);
             






    





















 

  


 






















