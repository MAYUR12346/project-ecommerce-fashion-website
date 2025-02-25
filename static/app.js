//slaider contener

const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.slider-controls');
let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// Create dots
function createDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if(index === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

// Touch handling
function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].clientX;
    if(touchStartX - touchEndX > 50) nextSlide();
    if(touchStartX - touchEndX < -50) prevSlide();
}

// Initialize
createDots();

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
sliderTrack.addEventListener('touchstart', handleTouchStart, false);
sliderTrack.addEventListener('touchend', handleTouchEnd, false);

// Responsive handling
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        sliderTrack.style.transition = 'none';
        updateSlider();
        setTimeout(() => {
            sliderTrack.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 10);
    }, 250);
});

// Auto-play
let autoPlay = setInterval(nextSlide, 5000);
sliderTrack.addEventListener('mouseenter', () => clearInterval(autoPlay));
sliderTrack.addEventListener('mouseleave', () => autoPlay = setInterval(nextSlide, 5000));
sliderTrack.addEventListener('touchstart', () => clearInterval(autoPlay));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') prevSlide();
    if(e.key === 'ArrowRight') nextSlide();
});

//contenar 3

      // Sample product data
      const products = [
        { id: 1, name: "Product 1", img: "/static/images/contenar img4.png", price: "₹1500", offerPrice: "₹999" },
        { id: 2, name: "Product 2", img: "/static/images/contenar img5.png", price: "₹1200", offerPrice: "₹799" },
        { id: 3, name: "Product 3", img: "/static/images/contenar img6.png", price: "₹1000", offerPrice: "₹699" },
        { id: 4, name: "Product 4", img: "/static/images/contenar img7.png", price: "₹2000", offerPrice: "₹1299" },
        { id: 5, name: "Product 5", img: "/static/images/contenar img8.png", price: "₹1800", offerPrice: "₹1199" }
    ];

    const productList = document.getElementById("product-list");
    const wishlistTab = document.getElementById("wishlist-tab");
    let wishlist = [];

    // Function to render products
    function renderProducts() {
        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <p class="offer-price">${product.offerPrice}</p>
                <div class="rating" data-id="${product.id}">
                    ★★★★★
                </div>
                <button class="wishlist-btn" onclick="addToWishlist(${product.id})">Add to Wishlist</button>
            `;
            productList.appendChild(card);
            setupRating(card.querySelector(".rating"), product.id);
        });
    }

    // Wishlist Function
    function addToWishlist(productId) {
        const product = products.find(p => p.id === productId);
        if (!wishlist.some(item => item.id === productId)) {
            wishlist.push(product);
            renderWishlist();
            toggleWishlist(true);
        }
    }

    // Toggle Wishlist Tab
    function toggleWishlist(forceOpen = false) {
        wishlistTab.classList.toggle("open", forceOpen);
        if (!forceOpen) wishlist = [];
    }

    // Render Wishlist Items
    function renderWishlist() {
        const wishlistItems = document.getElementById("wishlist-items");
        wishlistItems.innerHTML = "";
        wishlist.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("wishlist-item");
            div.innerHTML = `<img src="${item.img}" alt="${item.name}"><p>${item.name}</p>`;
            wishlistItems.appendChild(div);
        });
    }

    // Star Rating Setup
    function setupRating(element, productId) {
        element.innerHTML = "★".repeat(5).split("").map((star, i) => 
            `<span class="star" data-index="${i}" data-id="${productId}">${star}</span>`).join("");

        element.addEventListener("click", (e) => {
            if (e.target.classList.contains("star")) {
                let rating = e.target.dataset.index;
                saveRating(productId, rating);
                highlightStars(element, rating);
            }
        });
    }

    // Save Rating to Local Storage
    function saveRating(productId, rating) {
        localStorage.setItem(`rating-${productId}`, rating);
    }

    // Highlight Stars Based on Rating
    function highlightStars(element, rating) {
        const stars = element.querySelectorAll(".star");
        stars.forEach((star, i) => {
            star.style.color = i <= rating ? "gold" : "lightgray";
        });
    }

    renderProducts();

    //footer section
    
    function handleSubscribe(event) {
        event.preventDefault();
        const emailInput = event.target.querySelector('.newsletter-input');
        const email = emailInput.value;
        
        if(validateEmail(email)) {
            // Add your subscription logic here
            alert('Thank you for subscribing!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add click handlers for social links
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your social media tracking/redirect logic here
            console.log(`Redirecting to: ${this.href}`);
        });
    });



    