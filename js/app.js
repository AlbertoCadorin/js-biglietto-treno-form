// richiamare il form
const formElement = document.getElementById('my-form');
// nome utetnte
const newUserName = document.getElementById('new-user');
const userInfoElement = document.getElementById('user-info')
// chiedere all'utente i km
const newKmElement = document.getElementById('new-km');
const kmInfoElement = document.getElementById('km-info')
// chiedere l'eta 
const newAgeElement = document.getElementById('new-age');
const ageInfoElement = document.getElementById('age-info')
// prezzo km
const priceKm = 0.21;
const priceInfoElement = document.getElementById('price-info')

formElement.addEventListener('submit', function (event) {

  event.preventDefault();
  // volore nome 
  const userName = newUserName.value;
  console.log(userName)
  // valore dei km
  const userKm = parseInt(newKmElement.value);
  console.log(userKm);
  // valore anni utente
  const userAge = parseInt(newAgeElement.value);
  console.log(userAge);

 //calcolo del prezzo base
  let basePrice = priceKm * userKm;
  //calcolo della percentuale
  let discountPercentage = 0;
  
  if (userAge < 18) {
    discountPercentage = 20;
    console.log('sconto minorenne');
  } else if (userAge >= 65) {
    discountPercentage = 40;
    console.log('sconnto over')
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
  
  
  // stampa nome nel biglietto
  userInfoElement.innerText = userName;
  kmInfoElement.innerText = userKm;
  ageInfoElement.textContent = userAge;
  priceInfoElement.innerText = formattedPrice;

})



