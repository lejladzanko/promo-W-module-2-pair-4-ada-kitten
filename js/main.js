'use strict';

const list = document.querySelector('.js-list');

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Patricio';
const kittenOneDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés'.toUpperCase();
const kittenOneNameUpperCase = kittenOneName.toUpperCase();

const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc =
  ` Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
    hasta con pinta de alienígena han llegado a definir a esta raza
    gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenTwoRace = 'Sphynx'.toUpperCase();
const kittenTwoNameUpperCase = kittenTwoName.toUpperCase();

const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeDesc =
  ` Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenThreeRace = 'Maine Coon'.toUpperCase();
const kittenThreeNameUpperCase = kittenThreeName.toUpperCase();;



const kittenOne = `<li class="card js-kitten-1">
<article>
  <img
    class="card_img"
    src="${kittenOneImage}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenOneNameUpperCase}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">${kittenOneDesc}</p>
</article>
</li>`;
console.log (kittenOneNameUpperCase)

const kittenTwo = `<li class="card js-kitten-2">
<img
  class="card_img"
  src="${kittenTwoImage}"
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenTwoNameUpperCase}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">${kittenTwoDesc}</p>
</li>`;

const kittenThree = `<li class="card js-kitten-3">
<img
  class="card_img"
  src="${kittenThreeImage}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenThreeNameUpperCase}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">${kittenThreeDesc}</p>
</li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;

// const input_search_desc = document.querySelector('.js_in_search_desc');
// const descrSearchText = input_search_desc.value;

// if (descrSearchText == "") {
//  // left blank intentionally
// } else if (kittenOneDesc.includes(descrSearchText)) {
//   console.log("Gatito 1 cumple con la búsqueda");
//   document.querySelector('.js-kitten-2').classList.add('hidden');
//   document.querySelector('.js-kitten-3').classList.add('hidden');
// } else if (kittenTwoDesc.includes(descrSearchText)) {
//   console.log("Gatito 2 cumple con la búsqueda");
//   document.querySelector('.js-kitten-1').classList.add('hidden');
//   document.querySelector('.js-kitten-3').classList.add('hidden');
// } else if (kittenThreeDesc.includes(descrSearchText)) {
//   console.log("Gatito 3 cumple con la búsqueda");
//   document.querySelector('.js-kitten-1').classList.add('hidden');
//   document.querySelector('.js-kitten-2').classList.add('hidden');
// }

// const kittenOne = document.querySelector('.js-kittenOne');
// kittenOne.classList.add("hidden");


// const inputDesc = document.querySelector('.js-input-desc');
// const inputPhoto = document.querySelector('.js-input-photo');
// const inputName = document.querySelector('.js-input-name');
// const labelMessageError = document.querySelector('.js-label-error');

// const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancel = document.querySelector ('.js-btn-cancel');

// buttonAdd.addEventListener('click', (event) =>{
//   event.preventDefault();
//   console.log('La usuaria ha hecho click');

  // const valueDesc = inputDesc.value;
  // const valuePhoto = inputPhoto.value;
  // const valueName = inputName.value;
  

  // if (valueDesc === '' || valuePhoto === '' || valueName === '') {
  //   labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
  //   console.log(labelMessageError)
  // } else {
  // labelMessageError.innerHTML = "¡Tu gatito ha sido registrado!";
  // }
  // })

buttonCancel.addEventListener('click', (event) =>{
  event.preventDefault();
  console.log('Ha pulsado cancelar')
  
})

const newForm = document.querySelector('.js-new-form');

function showNewCatForm(){
  newForm.classList.remove('collapsed');
}

function hideNewCatForm(){
  newForm.classList.add('collapsed');
}

const newFormElement = document.querySelector ('.js-new-form'); 

const linkNewFormElement = document.querySelector ('.js-btn-form');

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
   newFormElement.classList.remove ('collapsed');
  } else {
    newFormElement.classList.add ('collapsed');
  }
}

linkNewFormElement.addEventListener('click', handleClickNewCatForm);

const buttonAdd = document.querySelector ('.js-btn-add');


function addNewKitten(event) {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
      labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
      console.log(labelMessageError);
    } else {
    labelMessageError.innerHTML = "¡Tu gatito ha sido registrado!";

}}

buttonAdd.addEventListener('click', addNewKitten);





const buttonSearch = document.querySelector('.js-button-search');

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

const filterKitten = (event) => {
event.preventDefault();
list.innerHTML = '';
  if (kittenOneDesc.includes(descrSearchText)) {
    list.innerHTML += kittenOne;
  }
  if (kittenTwoDesc.includes(descrSearchText)) {
    list.innerHTML += kittenTwo;
  }
  if (kittenThreeDesc.includes(descrSearchText)) {
    list.innerHTML += kittenThree;
  }
};



buttonSearch.addEventListener('click', filterKitten);