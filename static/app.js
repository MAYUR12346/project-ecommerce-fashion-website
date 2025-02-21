class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
<nav class="top-nav">
    <div class="nav-container">
        <div class="logo">FASHION FINDS</div>
        
        <div class="nav-icons">
            <a href="index.html" class="nav-icon-item">
                <i class="fa fa-home"></i>
                <span>Home</span>
            </a>
        
            <a href="men.html" class="nav-icon-item">
                <i class=" fas fa-male men"></i>
                <div>Men</div>
            </a>
            <a href="kids.html" class="nav-icon-item">
                <i class=" fas fa-child kids"></i>
                <div>Kids</div>

            </a>
            <a href="women.html" class="nav-icon-item">
                <i class=" fas fa-female women"></i>
                <div>Women</div>
            </a>
            
            <a href="Accessories.html" class="nav-icon-item">
                <i class="fas fa-shopping-bag"></i>
                <div>Accessories</div>
            </a>
            
            <a href="Jewellery.html" class="nav-icon-item">
                <i class="fas fa-gem"></i>
                <span>Jewellery</span>
            </a>
            <br>
            
        </div>
        
        <div class="search-bar d-flex align-items-center">
            <input type="text" placeholder="Search for products">
            <button>Search</button>
        </div>
        <br>

        <div class="nav-icons">
            <a href="account.html" class="nav-icon-item">
                <i class="fas fa-user"></i>
                <span>Account</span>
            </a>
            <a href="wishlist.html" class="nav-icon-item">
                <i class="fas fa-heart"></i>
                <span>Wishlist</span>
            </a>
            <a href="cart.html" class="nav-icon-item">
                <i class="fas fa-shopping-bag"></i>
                <span>Cart</span>
            </a>
        </div>
    </div>
</nav>
`
}
}

class SpecialFooter extends HTMLElement{
connectedCallback() {
    this.innerHTML = `
    <footer class="main-footer">
        <div class="footer-container">
            <!-- Footer Columns -->
            <div class="footer-column">
                <h4>Customer Service</h4>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Size Guide</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Affiliates</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4>Connect With Us</h4>
                <div class="social-links">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Pinterest</a>
                </div>
                
                <div class="newsletter">
                    <h4>Newsletter</h4>
                    <input type="email" placeholder="Enter your email">
                    <button class="subscribe-btn">SUBSCRIBE</button>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="copyright">
            <p>&copy; 2024 WOMFASHION. All rights reserved.</p>
            <div class="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Settings</a>
            </div>
        </div>
    </footer>`
}
}

customElements.define('special-header' , SpecialHeader)
customElements.define('special-footer',SpecialFooter)



function selectSize(btn) {
document.querySelectorAll('.size-btn').forEach(button => {
    button.classList.remove('selected');
});
btn.classList.add('selected');
}

function addToBag() {
// Add to cart functionality
alert('Added to bag!');
}

function saveToWishlist() {
// Wishlist functionality
alert('Saved to wishlist!');
}

// slaider

const sliderRow = document.querySelector('.a-row');
const slides = document.querySelectorAll('.a-carousel-slide');
let currentIndex = 0;
let autoSlideInterval;

function updateSlider() {
    sliderRow.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

// Auto-slide every 4 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}

// Manual controls
document.querySelector('.next-btn').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    nextSlide();
    startAutoSlide();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    prevSlide();
    startAutoSlide();
});


// Start autoplay
startAutoSlide();


