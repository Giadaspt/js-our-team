/*
- creare una card che viene vista:
  creo un array con dentro un oggetto
  stampo a video l'array dell'oggetto e lo vedo
*/

let teamContainer = document.querySelector('.team-container');
let teamCards ;

let cards = [
  {
    picture: 'img/wayne-barnett-founder-ceo.jpg',
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
  },
  {
    picture: 'img/angela-caroll-chief-editor.jpg',
    nome: 'Angela Caroli',
    ruolo: 'Chief Editor',
  },
  {
    picture: 'img/walter-gordon-office-manager.jpg',
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
  },
  {
    picture: 'img/angela-lopez-social-media-manager.jpg',
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
  },
  {
    picture: 'img/scott-estrada-developer.jpg',
    nome: 'Scott Estrada',
    ruolo: 'Developer',
  },
  {
    picture: 'img/barbara-ramos-graphic-designer.jpg',
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
  }
]
console.log("questo è il primo array con oggetto", cards);



console.log('immagine e desdcrizione', teamContainer);

for (let i = 0; i < cards.length; i++){
  
  teamContainer.innerHTML += `
  <div class="team-card">
  <div class="card-image">
  <img
  src="${cards[i].picture}"/>
  </div>
  <div class="card-text">
  <h3>${cards[i].nome}</h3>
  <p>${cards[i].ruolo}</p>
  </div>
  </div> 
  `;
}

// creare l'evento del click 
// fare in modo che quando vengano inseriti i dati venga creato un oggetto
// aggiungere quell'oggetto all'array generale (cards)

let button = document.getElementById('addMemberButton').addEventListener('click',handleClick);

function handleClick(){
  const arr = {};

  let nome= document.getElementById('name').value;
  let role = document.getElementById('role').value;
  let image = document.getElementById('image').value;
  // console.log('nome', nome);
  // console.log('ruolo',role);
  // console.log('immagine',image);

  arr.picture= image;
  arr.name = nome;
  arr.ruolo = role;

  console.log('oggetto',arr);

  teamContainer.innerHTML += `
  <div class="team-card">
  <div class="card-image">
  <img
  src="${arr.picture}"/>
  </div>
  <div class="card-text">
  <h3>${ arr.name}</h3>
  <p>${arr.ruolo}</p>
  </div>
  </div> 
  `;
  
  return arr;
}
console.log(cards);

/* ----------------------------------------------------------------- */

/*
creare l' array delle altre card
dentro all'array ci metto direttamente gli oggetti delle altre card del team
le pusho al primo array con un ciclo:
  creati gli array faccio un ciclo che li implementa con il push
*/
//faccio un array con gli altri oggetti dentro e lo pusho direttamente
// let cards2 = [
//   {
//     picture: 'img/angela-caroll-chief-editor.jpg',
//     nome: 'Angela Caroli',
//     ruolo: 'Chief Editor',
//   },
//   {
//     picture: 'img/walter-gordon-office-manager.jpg',
//     nome: 'Walter Gordon',
//     ruolo: 'Office Manager',
//   },
//   {
//     picture: 'img/angela-lopez-social-media-manager.jpg',
//     nome: 'Angela Lopez',
//     ruolo: 'Social Media Manager',
//   },
//   {
//     picture: 'img/scott-estrada-developer.jpg',
//     nome: 'Scott Estrada',
//     ruolo: 'Developer',
//   },
//   {
//     picture: 'img/barbara-ramos-graphic-designer.jpg',
//     nome: 'Barbara Ramos',
//     ruolo: 'Graphic Designer',
//   }
// ]

// console.log('questo è il secondo array con gli altri oggetti',cards);

//cards.push(...cards2);
// console.log("questo è l'array con lo spread",cards);

//teamContainer.append(cards);

// teamContainer.innerHTML += `
// <div class="team-card">
//   <div class="card-image">
//     <img
//     src="${cards[0].picture}"/>
//   </div>
//   <div class="card-text">
//     <h3>${cards[0].nome}</h3>
//     <p>${cards[0].ruolo}</p>
//   </div>
// </div>
// `;

