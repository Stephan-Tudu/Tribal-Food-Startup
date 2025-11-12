/* --- DATA (Includes food data and Tribe Names) --- */
const DATA = [
    { state:'Jharkhand', dishes:[
      {name:'Dhuska', price:99, img:'Images01/Dhuska.png', desc:'Deep-fried savory rice-lentil pancake.', type:'Veg', tribe: 'Santhal'},
      {name:'Rugra Curry', price:189, img:'Images01/Rugra-curry.png', desc:'Wild mushroom curry from forests.', type:'Veg', tribe: 'Munda'},
      {name:'Red Ant Chutney', price:79, img:'Images01/red-ant-chutney.png', desc:'Tangy chutney made with ants — traditional.', type:'Non-Veg', tribe: 'Oraon'},
      {name:'Handia', price:149, img:'Images01/handia.png', desc:'Fermented rice beverage — ceremonial drink.', type:'Veg', tribe: 'Santhal'},
      {name:'Bamboo Shoot Pickle', price:129, img:'Images01/bamboo.png', desc:'Preserved bamboo shoots with spices.', type:'Veg', tribe: 'Oraon'},
    ]},
    { state:'Odisha', dishes:[
      {name:'Pakhala', price:119, img:'Images01/pakhala.png', desc:'Fermented rice served with sides.', type:'Veg', tribe: 'Bonda'},
      {name:'Arisa Pitha', price:139, img:'Images01/arisa-pitha.png', desc:'Sweet rice pancake — harvest special.', type:'Veg', tribe: 'Kondh'},
      {name:'Dalma', price:159, img:'Images01/dalma.png', desc:'Lentil-vegetable curry with seasonal vegetables.', type:'Veg', tribe: 'Santhal'},
      {name:'Mudhi Mansa', price:179, img:'Images01/mudhi-mansa.png ', desc:'Meat with popped rice garnish.', type:'Non-Veg', tribe: 'Kondh'},
    ]},
    { state:'Nagaland', dishes:[
      {name:'Smoked Bamboo Chicken', price:299, img:'Images01/bamboo.png', desc:'Chicken cooked inside bamboo, smoked.', type:'Non-Veg', tribe: 'Naga'},
      {name:'Axone (Fermented Soy)', price:99, img:'Images01/axone-soy.png', desc:'Strongly flavored fermented soybean.', type:'Veg', tribe: 'Ao'},
      {name:'Naga Pork', price:249, img:'Images01/naga-pork.png', desc:'Spicy pork with native chilies.', type:'Non-Veg', tribe: 'Sema'},
    ]},
    { state:'Meghalaya', dishes:[
      {name:'Jadoh', price:249, img:'Images01/jodoh.png', desc:'Spiced rice with pork — Khasi speciality.', type:'Non-Veg', tribe: 'Khasi'},
      {name:'Doh Khleh', price:189, img:'Images01/dohkhel.png', desc:'Pork with herbs and aromatics.', type:'Non-Veg', tribe: 'Garo'},
    ]},
    { state:'Kerala', dishes:[
      {name:'Kola Bhaat', price:179, img:'Images01/kola-bhaat.png', desc:'Red rice with coconut and spices.', type:'Veg', tribe: 'Kurichia'},
      {name:'Kappa Biryani', price:189, img:'Images01/kappa-biryani.png', desc:'Tapioca-based biryani.', type:'Veg', tribe: 'Paniyan'},
    ]},
    { state:'Rajasthan', dishes:[
      {name:'Kutki Khichdi', price:149, img:'Images01/kutki-khicdi.jpg', desc:'Millet-based wholesome khichdi.', type:'Veg', tribe: 'Bhil'},
      {name:'Bajra Roti', price:89, img:'Images01/bajra-roti.jpg', desc:'Pearl-millet flatbread.', type:'Veg', tribe: 'Garasia'},
    ]},
    { state:'Tamil Nadu', dishes:[
      {name:'Millet Pongal', price:149, img:'Images01/millet-pongal.jpg', desc:'Savory millet porridge.', type:'Veg', tribe: 'Toda'},
      {name:'Ragi Dosa', price:99, img:'Images01/ragib-dosa.jpg', desc:'Finger millet crepe.', type:'Veg', tribe: 'Kota'},
    ]},
    { state:'Andhra Pradesh', dishes:[
      {name:'Pulihora', price:139, img:'Images01/pulihora.jpg', desc:'Tamarind rice with spices.', type:'Veg', tribe: 'Koya'},
      {name:'Kodi Pulao', price:179, img:'Images01/kodi-pulao.jpg', type:'Non-Veg', tribe: 'Gond'},
    ]},
    { state:'Telangana', dishes:[
      {name:'Smoked Fish with Herbs', price:229, img:'Images01/smoked-fish.jpg', desc:'River fish smoked and spiced.', type:'Non-Veg', tribe: 'Gond'},
      {name:'Raagi Sangati', price:129, img:'Images01/rangi-sangati.jpg', desc:'Millet with spicy curry.', type:'Veg', tribe: 'Chenchu'},
    ]},
    { state:'Arunachal Pradesh', dishes:[
      {name:'Bamboo Shoot Curry', price:199, img:'Images01/bamboo-shoot-curry.jpg', desc:'Bamboo shoots cooked with meat/veggies.', type:'Non-Veg', tribe: 'Apatani'},
      {name:'Smoked Pork', price:249, img:'Images01/smoked-porked.jpg', desc:'Smoked meats with herbs.', type:'Non-Veg', tribe: 'Galo'},
    ]},
    { state:'Manipur', dishes:[
      {name:'Eromba', price:199, img:'Images01/eromba.jpg', desc:'Mashed vegetables with fermented fish.', type:'Non-Veg', tribe: 'Meitei'},
      {name:'Chak-hao Pitha', price:129, img:'Images01/chak-hao-pitha.jpg', desc:'Black rice sweet pancake.', type:'Veg', tribe: 'Tangkhul'},
    ]},
    { state:'Tripura', dishes:[
      {name:'Mui Borok', price:139, img:'Images01/mui-borok.jpg', desc:'Local meat preparations.', type:'Non-Veg', tribe: 'Tripuri'},
      {name:'Bamboo Fish', price:179, img:'Images01/bamboo-fish.jpg', desc:'Fish with bamboo flavor.', type:'Non-Veg', tribe: 'Reang'},
    ]},
    { state:'West Bengal', dishes:[
      {name:'Hilsa Smoke', price:229, img:'Images01/hilsa-smoke.jpg', desc:'Smoked hilsa with herbs.', type:'Non-Veg', tribe: 'Santhal'},
      {name:'Panta Bhat', price:109, img:'Images01/panta-bhaat.jpg', desc:'Fermented rice breakfast.', type:'Veg', tribe: 'Munda'},
    ]},
    { state:'Maharashtra', dishes:[
      {name:'Varan Bhaat (Millet)', price:119, img:'Images01/varan-bhaat.png', desc:'Millet with lentil.', type:'Veg', tribe: 'Warli'},
      {name:'Mahua Ladoo', price:129, img:'Images01/mahua-ladoo.png', desc:'Sweet with mahua.', type:'Veg', tribe: 'Gond'},
    ]},
    { state:'Himachal Pradesh', dishes:[
      {name:'Siddu', price:159, img:'Images01/siddu.png', desc:'Steamed wheat dumpling.', type:'Veg', tribe: 'Gaddi'},
      {name:'Trout Smoke', price:229, img:'Images01/trout-smoke.png', type:'Non-Veg', tribe: 'Lahaula'},
    ]},
    { state:'Uttarakhand', dishes:[
      {name:'Gahat Soup', price:119, img:'Images01/gahat-soup.png', desc:'Horse gram soup — hearty & smoky.', type:'Veg', tribe: 'Jaunsari'},
      {name:'Mandua Roti', price:89, img:'Images01/mauda-roti.png', desc:'Ragi/buckwheat flatbread.', type:'Veg', tribe: 'Tharu'},
    ]}
  ]; 


/* --- APP STATE --- */
let cart = []; 
const ITEM_LIMIT = 15;
let allDishes = [];
let isAuthenticated = false; 
// Use Local Storage for persistence across sessions
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null; 
if (currentUser) {
    isAuthenticated = true;
}

let activeFilters = {
    state: 'all',
    tribe: 'all',
    type: 'all',
    search: ''
};


/* --- DOM refs (Global scope) --- */
const cardsEl = document.getElementById('cards');
const loginOverlay = document.getElementById('loginOverlay');
const profileOverlay = document.getElementById('profileOverlay'); 
const profileDetailsContentEl = document.getElementById('profileDetailsContent'); 
const authButtonContainerEl = document.getElementById('authButtonContainer'); 
const stateFilterEl = document.getElementById('stateFilter');
const tribeFilterEl = document.getElementById('tribeFilter');
const typeFilterEl = document.getElementById('typeFilter');
const searchBarEl = document.getElementById('searchBar');
const loadMoreBtnEl = document.getElementById('loadMoreBtn');
const carouselEl = document.getElementById('imageCarousel');
const carouselImages = document.querySelectorAll('.carousel-img');
const footerContentEl = document.getElementById('footerContent');
const hamburgerBtnEl = document.getElementById('hamburgerBtn'); // Mobile Menu Button
const mainNavEl = document.getElementById('mainNav'); // The Nav container


/* --- Authentication / Profile Logic --- */

function updateAuthButton() {
    if (!authButtonContainerEl) return;
    authButtonContainerEl.innerHTML = ''; 

    if (isAuthenticated) {
        const profileHTML = `
            <button class="btn cta" id="profileBtn">Profile</button>
            <div class="profile-content" id="profileDropdownContent" style="display:none;">
                <button onclick="openProfile()">View Profile</button>
                <button onclick="alert('My Orders page loaded.')">My Orders</button>
                <button onclick="doSignOut()">Sign Out</button>
            </div>
        `;
        authButtonContainerEl.innerHTML = profileHTML;

        document.getElementById('profileBtn').addEventListener('click', () => {
            const dropdown = document.getElementById('profileDropdownContent');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', (e) => {
            if (!authButtonContainerEl.contains(e.target)) {
                const dropdown = document.getElementById('profileDropdownContent');
                if (dropdown) dropdown.style.display = 'none';
            }
        });

    } else {
        authButtonContainerEl.innerHTML = `<button class="btn cta" id="loginBtn">Login / Sign Up</button>`;
        document.getElementById('loginBtn').addEventListener('click', () => {
             openLogin(); 
        });
    }
}

function openProfile() {
    if (!currentUser) return;
    closeLogin(); 

    let photoURL = currentUser.profilePhoto;
    if (!photoURL || photoURL === 'undefined') {
        photoURL = 'https://via.placeholder.com/80?text=P'; 
    }
    
    profileDetailsContentEl.innerHTML = `
        <img src="${photoURL}" alt="Profile Photo">
        <p><strong>Full Name:</strong> ${currentUser.firstName} ${currentUser.lastName}</p>
        <p><strong>Email:</strong> ${currentUser.email}</p>
        <p><strong>Phone:</strong> ${currentUser.phone}</p>
        <p><strong>Gender:</strong> ${currentUser.gender}</p>
        <p style="text-align:center;"><button class="btn cta" onclick="doSignOut()">Sign Out</button></p>
    `;

    profileOverlay.classList.add('show');
}

function closeProfile() {
    profileOverlay.classList.remove('show');
}

/* --- Login/Signup Functions --- */

function toggleLoginMode(isLogin) {
    const loginFormEl = document.getElementById('loginForm');
    const signUpFormEl = document.getElementById('signUpForm');
    const loginTitleEl = document.getElementById('loginTitle');

    loginFormEl.style.display = isLogin ? 'block' : 'none';
    signUpFormEl.style.display = isLogin ? 'none' : 'block';
    loginTitleEl.textContent = isLogin ? 'Login' : 'Create Account';
}

function doLogin(){
    const user = document.getElementById('loginUser').value.trim();
    const pw = document.getElementById('loginPass').value.trim();
    
    if(!user || !pw){ alert('Enter email/phone and password.'); return; }

    if (!currentUser || (currentUser.email !== user && currentUser.phone !== user) || currentUser.password !== pw) {
        alert('Login failed. Please check your credentials or sign up.');
        return;
    }

    isAuthenticated = true;
    localStorage.setItem('currentUser', JSON.stringify(currentUser)); 
    updateAuthButton();
    alert(`Welcome back, ${currentUser.firstName}!`);
    closeLogin();
}

function doSignUp(){
    const firstName = document.getElementById('signUpFirstName').value.trim();
    const lastName = document.getElementById('signUpLastName').value.trim();
    const phone = document.getElementById('signUpPhone').value.trim();
    const email = document.getElementById('signUpEmail').value.trim();
    const gender = document.getElementById('signUpGender').value;
    const photoFile = document.getElementById('signUpPhoto').files[0];
    const pw = document.getElementById('signUpPass').value.trim();
    const cpw = document.getElementById('confirmPass').value.trim();

    if(!firstName || !lastName || !phone || !email || !pw || !cpw){ alert('Please fill all required fields.'); return; }
    if(pw.length < 6){ alert('Password must be at least 6 characters.'); return; }
    if(pw !== cpw){ alert('Passwords do not match.'); return; }
    
    let photoURL = photoFile ? URL.createObjectURL(photoFile) : 'https://via.placeholder.com/80?text=P';

    currentUser = {
        firstName, lastName, phone, email, gender, 
        profilePhoto: photoURL,
        password: pw 
    };
    
    isAuthenticated = true;
    localStorage.setItem('currentUser', JSON.stringify(currentUser)); 
    updateAuthButton();
    alert(`Account created successfully! Welcome, ${firstName}!`);
    closeLogin();
}

function doSignOut() {
    isAuthenticated = false;
    currentUser = null;
    localStorage.removeItem('currentUser'); 
    updateAuthButton();
    closeProfile();
    alert('Signed out successfully.');
}

function openLogin(){ 
    document.getElementById('loginOverlay').classList.add('show'); 
    toggleLoginMode(true); 
}

function closeLogin(){ document.getElementById('loginOverlay').classList.remove('show'); }


/* --- UI build & Data Logic --- */
function buildAllDishes() {
    DATA.forEach(s => {
        s.dishes.forEach(d => {
            allDishes.push({ ...d, state: s.state, tribe: d.tribe || 'General Tribe', type: d.type || 'Veg' });
        });
    });
    populateFilterDropdowns();
}

function populateFilterDropdowns() {
    const uniqueStates = [...new Set(allDishes.map(d => d.state))].sort();
    const uniqueTribes = [...new Set(allDishes.map(d => d.tribe))].sort();

    if (stateFilterEl) {
        uniqueStates.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateFilterEl.appendChild(option);
        });
    }

    if (tribeFilterEl) {
        uniqueTribes.forEach(tribe => {
            const option = document.createElement('option');
            option.value = tribe;
            option.textContent = tribe;
            tribeFilterEl.appendChild(option);
        });
    }
}

function cardFor(item){
    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    wrapper.innerHTML = `
        <div class="thumb"><img src="${item.img}" alt="${item.name}"></div>
        <div class="title">${item.name}</div>
        <div class="meta">${item.state} / ${item.type}</div>
        <div class="price">₹${item.price}</div>
        <div class="actions">
            <button class="preview-btn">Preview</button>
            <button class="add-btn">Add</button>
        </div>
    `;
    wrapper.querySelector('.preview-btn').addEventListener('click', ()=>openPreview(item, item.state));
    wrapper.querySelector('.add-btn').addEventListener('click', ()=>{
        addToCart(item, item.state);
    });
    return wrapper;
}

function filterAndRenderDishes(limit = ITEM_LIMIT) {
    const { state, tribe, type, search } = activeFilters;
    
    let filtered = allDishes.filter(d => {
        if (state !== 'all' && d.state !== state) return false;
        if (tribe !== 'all' && d.tribe !== tribe) return false;
        if (type !== 'all' && d.type !== type) return false;
        if (search) {
            const term = search.toLowerCase();
            return d.name.toLowerCase().includes(term) || d.state.toLowerCase().includes(term) || d.tribe.toLowerCase().includes(term);
        }
        return true;
    });

    let currentLimit = limit;
    if (currentLimit > filtered.length) currentLimit = filtered.length;

    renderDishes(filtered, currentLimit);
    
    if (loadMoreBtnEl) {
        if (filtered.length > currentLimit) {
            loadMoreBtnEl.style.display = 'block';
        } else {
            loadMoreBtnEl.style.display = 'none';
        }
    }
}

function renderDishes(dishes, limit){
    if (cardsEl) {
        cardsEl.innerHTML = '';
        const toRender = dishes.slice(0, limit);
        toRender.forEach(it => cardsEl.appendChild(cardFor(it)));
    }
}

function loadMoreItems() {
    const currentLimit = parseInt(cardsEl.children.length) || ITEM_LIMIT;
    const newLimit = currentLimit + ITEM_LIMIT;
    filterAndRenderDishes(newLimit);
}

/* --- Carousel Manual Control Logic --- */
let currentImageIndex = 0;

function updateCarouselPosition() {
    if (!carouselEl || carouselImages.length === 0) return;
    
    currentImageIndex = (currentImageIndex + carouselImages.length) % carouselImages.length;
    
    const offset = -currentImageIndex * 100;
    carouselEl.style.transform = `translateX(${offset}%)`;
}

function slideCarousel(direction) {
    currentImageIndex += direction;
    updateCarouselPosition();
}

function setupManualCarouselControls() {
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => slideCarousel(-1));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => slideCarousel(1));
    }
    
    updateCarouselPosition();
}


/* --- Mobile Menu (Hamburger) Logic --- */
function setupHamburgerMenu() {
    if (hamburgerBtnEl && mainNavEl) {
        hamburgerBtnEl.addEventListener('click', () => {
            mainNavEl.classList.toggle('mobile-menu-open');
            // Change icon to 'X' when open
            if (mainNavEl.classList.contains('mobile-menu-open')) {
                hamburgerBtnEl.textContent = '✕';
            } else {
                hamburgerBtnEl.textContent = '☰';
            }
        });

        // Close menu when a link is clicked
        mainNavEl.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNavEl.classList.contains('mobile-menu-open')) {
                    mainNavEl.classList.remove('mobile-menu-open');
                    hamburgerBtnEl.textContent = '☰';
                }
            });
        });
    }
}


/* --- Cart and Checkout Logic --- */

function openPreview(item, state){
    const previewOverlay = document.getElementById('previewOverlay');
    const previewAddBtn = document.getElementById('previewAddBtn');
    
    document.getElementById('previewImg').src = item.img;
    document.getElementById('previewName').textContent = item.name;
    document.getElementById('previewState').textContent = state;
    document.getElementById('previewPrice').textContent = '₹' + item.price;
    document.getElementById('previewDesc').textContent = item.desc || 'Traditional tribal recipe.';
    
    previewAddBtn.onclick = ()=>{ 
        addToCart(item, state); 
        closePreview(); 
        document.getElementById('cartPanel').classList.add('show');
    };
    previewOverlay.classList.add('show');
}
function closePreview(){ document.getElementById('previewOverlay').classList.remove('show'); }

function addToCart(item, state){
    const existing = cart.find(c => c.name===item.name && c.state===state);
    if(existing){ existing.qty += 1; }
    else { cart.push({name:item.name, price:item.price, img:item.img, state, qty:1}); }
    updateCartUI();
}

function updateCartUI(){
    const cartCountEl = document.getElementById('cartCount');
    const cartItemsEl = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');

    if (!cartItemsEl) return; 

    cartItemsEl.innerHTML = '';
    let total = 0;
    cart.forEach((c, idx) => {
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <img src="${c.img}" alt="${c.name}">
            <div style="flex:1">
                <div style="font-weight:700">${c.name}</div>
                <div style="color:#666;font-size:13px">${c.state}</div>
                <div style="margin-top:6px;font-weight:800">₹${c.price} x ${c.qty}</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
                <button style="padding:6px;border-radius:8px;border:1px solid #eee;background:#fff;cursor:pointer" onclick="changeQty(${idx},1)">＋</button>
                <button style="padding:6px;border-radius:8px;border:1px solid #eee;background:#fff;cursor:pointer" onclick="changeQty(${idx},-1)">－</button>
                <button style="padding:6px;border-radius:8px;border:1px solid #f2dede;background:#fff;color:#d9534f;cursor:pointer;margin-top:6px" onclick="removeItem(${idx})">Remove</button>
            </div>
        `;
        cartItemsEl.appendChild(row);
        total += c.price * c.qty;
    });
    cartCountEl.textContent = cart.reduce((s,a)=>s+a.qty,0);
    cartTotalEl.textContent = total;
}

function changeQty(idx, delta){
    cart[idx].qty += delta;
    if(cart[idx].qty <= 0) cart.splice(idx,1);
    updateCartUI();
}

function removeItem(idx){
    cart.splice(idx,1);
    updateCartUI();
}

function clearCart(){
    if(confirm('Clear all items from cart?')){ cart = []; updateCartUI(); }
}

function placeOrder(){
    // CHECKOUT AUTHENTICATION
    if (!isAuthenticated) { 
        openLogin();
        alert('Please login or sign up to complete your order.');
        return;
    }
    if(cart.length === 0){ alert('Cart is empty. Add items before checkout.'); return; }

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const addr = document.getElementById('custAddr').value.trim();
    if(!name || !phone || !addr){ alert('Please fill name, phone and address.'); return; }
    
    const total = cart.reduce((s,c)=>s+c.price*c.qty,0);
    alert(`Thanks ${name}!\nOrder placed — ₹${total}.\nWe will contact ${phone}.\n( Demo )`);
    
    cart = []; updateCartUI(); closeCheckout(); closeCart();
    document.getElementById('custName').value=''; document.getElementById('custPhone').value=''; document.getElementById('custAddr').value='';
}
function closeCheckout(){ document.getElementById('checkoutOverlay').classList.remove('show'); }
function closeCart(){ document.getElementById('cartPanel').classList.remove('show'); }

function renderFooter() {
    const footerEl = document.getElementById('footerContent');
    if (!footerEl) return;
    const copyrightText = '© 2025 VAN BHOJ — Tribal Food Marketplace';
    footerEl.innerHTML = copyrightText;
}


/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
    buildAllDishes(); 
    filterAndRenderDishes(ITEM_LIMIT);
    renderFooter(); 
    
    setupManualCarouselControls(); 
    updateAuthButton();
    setupHamburgerMenu(); // Initialize the mobile menu

    // --- Event listeners for filters and search ---
    if (stateFilterEl) stateFilterEl.addEventListener('change', (e) => {
        activeFilters.state = e.target.value;
        activeFilters.search = ''; 
        searchBarEl.value = '';
        filterAndRenderDishes(ITEM_LIMIT);
    });

    if (tribeFilterEl) tribeFilterEl.addEventListener('change', (e) => {
        activeFilters.tribe = e.target.value;
        activeFilters.search = '';
        searchBarEl.value = '';
        filterAndRenderDishes(ITEM_LIMIT);
    });

    if (typeFilterEl) typeFilterEl.addEventListener('change', (e) => {
        activeFilters.type = e.target.value;
        activeFilters.search = '';
        searchBarEl.value = '';
        filterAndRenderDishes(ITEM_LIMIT);
    });

    if (searchBarEl) searchBarEl.addEventListener('input', (e) => {
        activeFilters.search = e.target.value.trim();
        filterAndRenderDishes(allDishes.length); 
    });

    if (loadMoreBtnEl) loadMoreBtnEl.addEventListener('click', loadMoreItems);

    // --- Cart and Modal actions ---
    document.getElementById('cartBtn').addEventListener('click', ()=> document.getElementById('cartPanel').classList.add('show'));
    document.getElementById('cartClose').addEventListener('click', closeCart);

    document.getElementById('checkoutBtn').addEventListener('click', ()=>{
        if(cart.length === 0){ alert('Cart is empty. Add items before checkout.'); return; }
        
        if (!isAuthenticated) { 
            openLogin();
            alert('Please login or sign up to complete your order.');
            return;
        }
        
        document.getElementById('checkoutOverlay').classList.add('show');
    });

    // Global Modal close listeners
    document.getElementById('previewOverlay').addEventListener('click', (e)=>{
        if(e.target === document.getElementById('previewOverlay')) closePreview();
    });
    document.getElementById('checkoutOverlay').addEventListener('click',(e)=>{ if(e.target === document.getElementById('checkoutOverlay')) closeCheckout(); });
    document.getElementById('loginOverlay').addEventListener('click',(e)=>{ if(e.target === document.getElementById('loginOverlay')) closeLogin(); });
});