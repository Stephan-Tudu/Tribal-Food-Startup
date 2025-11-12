/* --- DATA --- */
const DATA = [
  { state: 'Jharkhand', dishes:[
    {name:'Dhuska', price:99, img:"Images01/Dhuska.png", desc:'Rice-lentil pancake.', type:'Veg'},
    {name:'Rugra Curry', price:189, img:'Images01/Rugra-curry.png', desc:'Wild mushroom curry.', type:'Veg'},
    {name:'Red Ant Chutney', price:79, img:'Images01/red-ant-chutney.png', desc:'Tangy tribal chutney.', type:'Non-Veg'},
    {name:'Handia', price:149, img:'Images01/handia.png', desc:'Fermented rice drink.', type:'Veg'},
    {name:'Bamboo Shoot Pickle', price:129, img:'Images01/bamboo.png', desc:'Spicy bamboo pickle.', type:'Veg'},
  ]},
  { state:'Odisha', dishes:[
    {name:'Pakhala', price:119, img:'Images01/pakhala.png', desc:'Fermented rice.', type:'Veg'},
    {name:'Dalma', price:159, img:'Images01/dalma.png', desc:'Lentil-vegetable curry.', type:'Veg'},
    {name:'Mudhi Mansa', price:179, img:'Images01/mudhi-mansa.png', desc:'Puffed rice with mutton.', type:'Non-Veg'},
  ]},
  { state:'Nagaland', dishes:[
    {name:'Smoked Bamboo Chicken', price:299, img:'Images01/bamboo.png', desc:'Smoked chicken in bamboo.', type:'Non-Veg'},
    {name:'Axone (Fermented Soy)', price:99, img:'Images01/axone-soy.png', desc:'Fermented soybean dish.', type:'Veg'},
    {name:'Naga Pork', price:249, img:'Images01/naga-pork.png', desc:'Spicy pork with chili.', type:'Non-Veg'},
  ]},
  { state:'Meghalaya', dishes:[
    {name:'Jadoh', price:249, img:'Images01/jodoh.png', desc:'Pork rice dish.', type:'Non-Veg'},
    {name:'Doh Khleh', price:189, img:'Images01/dohkhel.png', desc:'Pork salad.', type:'Non-Veg'},
  ]},
  { state:'Kerala', dishes:[
    {name:'Kappa Biryani', price:189, img:'Images01/kappa-biryani.png', desc:'Tapioca biryani.', type:'Veg'},
    {name:'Kola Bhaat', price:179, img:'Images01/kola-bhaat.png', desc:'Red rice coconut mix.', type:'Veg'},
  ]},
  { state:'West Bengal', dishes:[
    {name:'Hilsa Smoke', price:229, img:'Images01/hilsa-smoke.jpg', desc:'Smoked fish.', type:'Non-Veg'},
    {name:'Panta Bhat', price:109, img:'Images01/panta-bhaat.jpg', desc:'Fermented rice.', type:'Veg'},
  ]}
];

/* --- BUILD MENU --- */
const stateFilter = document.getElementById('stateFilter');
const typeFilter = document.getElementById('typeFilter');
const searchBar = document.getElementById('searchBar');
const menuCards = document.getElementById('menuCards');

let allDishes = [];

function buildAllDishes() {
  DATA.forEach(s => s.dishes.forEach(d => allDishes.push({...d, state: s.state})));
  populateFilters();
  renderMenu(allDishes);
}

function populateFilters() {
  const states = [...new Set(allDishes.map(d => d.state))];
  states.forEach(state => {
    const opt = document.createElement('option');
    opt.value = state;
    opt.textContent = state;
    stateFilter.appendChild(opt);
  });
}

function renderMenu(dishes) {
  menuCards.innerHTML = '';
  dishes.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>${item.state} | ${item.type}</p>
      </div>
      <div class="card-footer">
        <div class="price">₹${item.price}</div>
        <button>View</button>
      </div>
    `;
    menuCards.appendChild(card);
  });
}

function applyFilters() {
  const stateVal = stateFilter.value;
  const typeVal = typeFilter.value;
  const searchVal = searchBar.value.toLowerCase();

  let filtered = allDishes.filter(d => 
    (stateVal === 'all' || d.state === stateVal) &&
    (typeVal === 'all' || d.type === typeVal) &&
    (d.name.toLowerCase().includes(searchVal) || d.state.toLowerCase().includes(searchVal))
  );
  renderMenu(filtered);
}

stateFilter.addEventListener('change', applyFilters);
typeFilter.addEventListener('change', applyFilters);
searchBar.addEventListener('input', applyFilters);

buildAllDishes();
