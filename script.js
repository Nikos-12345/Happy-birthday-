// --- ΠΛΟΗΓΗΣΗ ΣΤΑ ΒΗΜΑΤΑ ---
function nextStep(stepNumber) {
    // Κλείσιμο όλων των καρτών
    document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
    // Άνοιγμα της επόμενης
    document.getElementById('step-' + stepNumber).classList.add('active');
    
    // Έκρηξη καρδιών στην αλλαγή οθόνης
    for(let i=0; i<15; i++) {
        createHeart();
    }
}

// --- ΛΟΓΙΚΗ SLIDER (ΛΟΓΟΙ) ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide += direction;

    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add('active');
}

// --- ΛΟΓΙΚΗ ΚΟΥΠΟΝΙΩΝ ---
function revealCoupon(card) {
    const text = card.querySelector('.reveal');
    if(text.style.display === 'block') return; // Μην ξαναανοίγει αν είναι ανοιχτό
    
    text.style.display = 'block';
    card.style.borderStyle = 'solid';
    card.style.backgroundColor = '#f0fdf4'; // Απαλό πράσινο επιτυχίας
    card.style.borderColor = '#16a34a';
    
    // Έκρηξη καρδιών στο κλικ
    for(let i=0; i<10; i++) {
        createHeart();
    }
}

// --- ΔΗΜΙΟΥΡΓΙΑ BACKGROUND ΚΑΡΔΙΩΝ ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Τυχαία αρχική οριζόντια θέση και ταχύτητα
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // 3-5 δευτερόλεπτα
    heart.style.setProperty('--random-x', (Math.random() * 200 - 100) + 'px');
    
    document.body.appendChild(heart);

    // Αφαίρεση από το DOM μετά το τέλος του animation για εξοικονόμηση μνήμης
    setTimeout(() => {
        heart.remove();
    }, 4500);
}

// Αυτόματη συνεχόμενη ροή καρδιών στο background
setInterval(createHeart, 450);