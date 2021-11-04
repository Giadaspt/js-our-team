/*
- creare una card che viene vista:
  creo un array con dentro un oggetto
  stampo a video l'array dell'oggetto e lo vedo
*/


let teamContainer = document.querySelector('.team-container');
let teamCards = document.getElementsByClassName('team-card');

let cards = [
  {
    picture: 'img/wayne-barnett-founder-ceo.jpg',
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
  }
]
console.log("questo è l'array dell'oggetto", cards);

teamContainer.append(cards);

teamContainer.innerHTML = `
<div class="team-card">
  <div class="card-image">
    <img
    src="${cards[0].picture}"/>
  </div>
  <div class="card-text">
    <h3>${cards[0].nome}</h3>
    <p>${cards[0].ruolo}</p>
  </div>
</div>
`;
console.log('stampato immagine e desdcrizione', teamContainer);


