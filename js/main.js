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



const kittenOne = `<li class="card">
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


const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="${kittenTwoImage}"
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenTwoNameUpperCase}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">${kittenTwoDesc}</p>
</li>`;

const kittenThree = `<li class="card">
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


