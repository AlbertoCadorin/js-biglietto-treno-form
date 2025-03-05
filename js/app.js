// chiedere all'utente i km
const newKmElement = document.getElementById('new-km');
// chiedere l'eta 
const newAgeElement = document.getElementById('new-age');
// richiamare il bottone 
const buttElement = document.getElementById('butt');
// richiamare il form
const formElement = document.getElementById('my-form');
// costo al km
const priceKm = 0.21;


console.log(newKmElement);
console.log(buttElement);
console.log(formElement);
console.log(priceKm);


formElement.addEventListener('submit', function (event) {

  event.preventDefault();
const userKm = parseInt(newKmElement.value);
console.log(userKm);
const userAge = parseInt(newAgeElement.value);
console.log(userAge);
//calcoli dello sconto e del prezzo
  //se i dati sono validi
  const isDataValid = !isNaN(userKm) && !isNaN(userAge);
  //se i dati sono maggiori di zero
  const isDataBiggerThanZero = userAge > 0 && userKm > 0;
  //se età compresa tra 1-99
  const isAgeValid = userAge > 1 && userAge < 99;
  
  
  const validCondition = isDataValid && isDataBiggerThanZero && isAgeValid;
  
  if (validCondition) {
  
    //calcolo del prezzo base
    let basePrice = priceKm * userKm;
    //calcolo della percentuale
    let discountPercentage = 0;
  
    if (userAge < 18) {
      discountPercentage = 20;
    } else if (userAge >= 65) {
      discountPercentage = 40;
    }
  
    let discount = (basePrice * discountPercentage) / 100;
    //valore dello sconto da sottrarre al prezzo finale
    basePrice = basePrice - discount;
    //calcolo del prezzo formattato in euro
    let formattedPrice = new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR'
    }).format(basePrice);
  
    //stampa del prezzo
    console.log(`Il prezzo finale del biglietto è ${formattedPrice}`);
  } else {
      console.error('I dati inseriti non sono corretti');
    }})