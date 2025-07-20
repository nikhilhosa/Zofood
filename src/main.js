import './style.css'

// Sample data
const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    deliveryTime: "25-30 min",
    cuisine: "American, Burgers",
    priceRange: "$$",
    discount: "20% OFF",
    featured: true
  },
  {
    id: 2,
    name: "Pizza Corner",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.3,
    deliveryTime: "30-35 min",
    cuisine: "Italian, Pizza",
    priceRange: "$$$",
    discount: "15% OFF",
    featured: true
  },
  {
    id: 3,
    name: "Sushi Zen",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    deliveryTime: "40-45 min",
    cuisine: "Japanese, Sushi",
    priceRange: "$$$$",
    discount: "10% OFF",
    featured: false
  },
  {
    id: 4,
    name: "Taco Fiesta",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.2,
    deliveryTime: "20-25 min",
    cuisine: "Mexican, Tacos",
    priceRange: "$$",
    discount: "25% OFF",
    featured: false
  },
  {
    id: 5,
    name: "Curry House",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.4,
    deliveryTime: "35-40 min",
    cuisine: "Indian, Curry",
    priceRange: "$$$",
    discount: "30% OFF",
    featured: true
  },
  {
    id: 6,
    name: "Healthy Bowls",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    deliveryTime: "15-20 min",
    cuisine: "Healthy, Salads",
    priceRange: "$$",
    discount: "Free Delivery",
    featured: false
  }
];

const categories = [
  { name: "Pizza", icon: "🍕", color: "#FF6B6B" },
  { name: "Burgers", icon: "🍔", color: "#4ECDC4" },
  { name: "Sushi", icon: "🍣", color: "#45B7D1" },
  { name: "Indian", icon: "🍛", color: "#96CEB4" },
  { name: "Chinese", icon: "🥡", color: "#FFEAA7" },
  { name: "Desserts", icon: "🍰", color: "#DDA0DD" },
  { name: "Coffee", icon: "☕", color: "#D63031" },
  { name: "Healthy", icon: "🥗", color: "#00B894" }
];

// State management
let currentLocation = "SiddeshwarExpress, Train.NO:8659633";
let searchQuery = "";
let selectedCategory = "";
let cart = [];

// Utility functions
function formatRating(rating) {
  return "★".repeat(Math.floor(rating)) + (rating % 1 ? "☆" : "");
}

function addToCart(restaurantId) {
  const restaurant = restaurants.find(r => r.id === restaurantId);
  if (restaurant) {
    cart.push(restaurant);
    updateCartCount();
    showNotification(`Added ${restaurant.name} to cart!`);
  }
}

function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    cartCount.textContent = cart.length;
    cartCount.style.display = cart.length > 0 ? 'block' : 'none';
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

function filterRestaurants() {
  return restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || 
                           restaurant.cuisine.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });
}

function renderHeader() {
  return `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h1>🍽️ Foodie Express</h1>
          </div>
          
          <div class="location-selector">
            <span class="location-icon">📍</span>
            <span class="location-text">${currentLocation}</span>
            <button class="change-location-btn">Change</button>
          </div>
          
          <div class="header-actions">
            <button class="cart-btn" onclick="toggleCart()">
              🛒 Cart
              <span class="cart-count">${cart.length}</span>
            </button>
            <button class="login-btn">Login</button>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderHero() {
  return `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h2 class="hero-title">Order food from your favorite restaurants</h2>
          <p class="hero-subtitle">Fast delivery • Great prices • Amazing taste</p>
          
          <div class="search-container">
            <div class="search-box">
              <span class="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search for restaurants, cuisines, or dishes..."
                class="search-input"
                value="${searchQuery}"
                oninput="handleSearch(this.value)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCategories() {
  return `
    <section class="categories">
      <div class="container">
        <h3 class="section-title">What's on your mind?</h3>
        <div class="categories-grid">
          ${categories.map(category => `
            <div class="category-card ${selectedCategory === category.name ? 'active' : ''}" 
                 onclick="selectCategory('${category.name}')"
                 style="--category-color: ${category.color}">
              <div class="category-icon">${category.icon}</div>
              <span class="category-name">${category.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderRestaurants() {
  const filteredRestaurants = filterRestaurants();
  const featuredRestaurants = filteredRestaurants.filter(r => r.featured);
  const regularRestaurants = filteredRestaurants.filter(r => !r.featured);
  
  return `
    <section class="restaurants">
      <div class="container">
        ${featuredRestaurants.length > 0 ? `
          <div class="featured-section">
            <h3 class="section-title">Featured Restaurants</h3>
            <div class="restaurants-grid featured">
              ${featuredRestaurants.map(renderRestaurantCard).join('')}
            </div>
          </div>
        ` : ''}
        
        <div class="all-restaurants-section">
          <h3 class="section-title">All Restaurants (${filteredRestaurants.length})</h3>
          <div class="restaurants-grid">
            ${regularRestaurants.map(renderRestaurantCard).join('')}
          </div>
        </div>
        
        ${filteredRestaurants.length === 0 ? `
          <div class="no-results">
            <div class="no-results-icon">🔍</div>
            <h3>No restaurants found</h3>
            <p>Try adjusting your search or browse our categories</p>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

function renderRestaurantCard(restaurant) {
  return `
    <div class="restaurant-card ${restaurant.featured ? 'featured' : ''}" onclick="viewRestaurant(${restaurant.id})">
      <div class="restaurant-image">
        <img src="${restaurant.image}" alt="${restaurant.name}" loading="lazy" />
        <div class="discount-badge">${restaurant.discount}</div>
        ${restaurant.featured ? '<div class="featured-badge">Featured</div>' : ''}
      </div>
      
      <div class="restaurant-info">
        <h4 class="restaurant-name">${restaurant.name}</h4>
        <div class="restaurant-meta">
          <span class="rating">
            <span class="stars">${formatRating(restaurant.rating)}</span>
            <span class="rating-number">${restaurant.rating}</span>
          </span>
          <span class="delivery-time">🕒 ${restaurant.deliveryTime}</span>
        </div>
        <p class="cuisine">${restaurant.cuisine}</p>
        <div class="restaurant-footer">
          <span class="price-range">${restaurant.priceRange}</span>
          <button class="order-btn" onclick="event.stopPropagation(); addToCart(${restaurant.id})">
            Order Now
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Foodie Express</h4>
            <p>Delivering happiness, one meal at a time.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>For Restaurants</h4>
            <ul>
              <li><a href="#">Partner with us</a></li>
              <li><a href="#">Restaurant Dashboard</a></li>
              <li><a href="#">Business Support</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Foodie Express. All rights reserved.</p>
          <p>Built with ❤️ for food lovers everywhere</p>
        </div>
      </div>
    </footer>
  `;
}

// Event handlers
function handleSearch(value) {
  searchQuery = value;
  renderApp();
}

function selectCategory(category) {
  selectedCategory = selectedCategory === category ? "" : category;
  renderApp();
}

function viewRestaurant(id) {
  const restaurant = restaurants.find(r => r.id === id);
  if (restaurant) {
    showNotification(`Opening ${restaurant.name} menu...`);
  }
}

function toggleCart() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!");
    return;
  }
  
  const cartItems = cart.map(item => item.name).join(', ');
  showNotification(`Cart items: ${cartItems}`);
}

// Main render function
function renderApp() {
  document.querySelector('#app').innerHTML = `
    ${renderHeader()}
    ${renderHero()}
    ${renderCategories()}
    ${renderRestaurants()}
    ${renderFooter()}
  `;
  
  updateCartCount();
}

// Make functions globally available
window.handleSearch = handleSearch;
window.selectCategory = selectCategory;
window.viewRestaurant = viewRestaurant;
window.addToCart = addToCart;
window.toggleCart = toggleCart;

// Initialize app
renderApp();

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for internal links
  document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
  
  // Add loading states for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  });
});
