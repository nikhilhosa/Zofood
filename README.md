# 🍽️ Foodie Express - Food Delivery App

A modern, responsive food delivery web application inspired by Zomato, built with vanilla JavaScript and deployed on GitHub Pages.

## ✨ Features

### 🎯 Core Functionality
- **Restaurant Discovery**: Browse and search through restaurants
- **Smart Search**: Search by restaurant name, cuisine, or dishes
- **Category Filtering**: Filter restaurants by food categories
- **Interactive Cart**: Add restaurants to cart with real-time updates
- **Location Services**: Location-based restaurant discovery
- **Responsive Design**: Works perfectly on all devices

### 🎨 Design Highlights
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Featured Restaurants**: Highlighted premium restaurant partners
- **Rating System**: Visual star ratings and delivery time estimates
- **Discount Badges**: Promotional offers and deals display
- **Image Optimization**: Lazy loading and responsive images
- **Dark Mode Ready**: Prepared for dark theme implementation

### 🚀 Technical Features
- **Vanilla JavaScript**: No framework dependencies, fast loading
- **CSS Grid & Flexbox**: Modern layout techniques
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: WCAG compliant with keyboard navigation
- **Performance Optimized**: Optimized images and efficient code
- **SEO Friendly**: Semantic HTML and meta tags

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with GitHub Actions
- **Images**: Pexels stock photos
- **Fonts**: Google Fonts (Inter)
- **Icons**: Unicode emojis for universal compatibility

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/foodie-express.git
   cd foodie-express
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`

### GitHub Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   - The site will auto-deploy on every push to main

3. **Access your live site**
   - Your app will be available at: `https://yourusername.github.io/foodie-express/`

## 📁 Project Structure

```
foodie-express/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── main.js                 # Main application logic
│   └── style.css               # Styles and responsive design
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## 🎮 Features Demo

### Restaurant Discovery
- Browse featured restaurants with special promotions
- View ratings, delivery times, and cuisine types
- Filter by categories like Pizza, Burgers, Sushi, etc.

### Search & Filter
- Real-time search across restaurant names and cuisines
- Category-based filtering with visual feedback
- Smart search suggestions and results

### Interactive Elements
- Add restaurants to cart with notifications
- Hover effects and smooth animations
- Responsive design for all screen sizes

### User Experience
- Location-based restaurant discovery
- Visual feedback for all interactions
- Accessible design with keyboard navigation

## 🎨 Customization

### Adding New Restaurants
Edit the `restaurants` array in `src/main.js`:

```javascript
const restaurants = [
  {
    id: 7,
    name: "Your Restaurant",
    image: "https://your-image-url.jpg",
    rating: 4.5,
    deliveryTime: "25-30 min",
    cuisine: "Your Cuisine",
    priceRange: "$$",
    discount: "20% OFF",
    featured: true
  }
];
```

### Styling
- Modify CSS variables in `src/style.css` for theme customization
- Update colors, fonts, and spacing using the CSS custom properties
- Add new animations and transitions

### Functionality
- Extend the cart system in `src/main.js`
- Add new filtering options
- Implement user authentication
- Add payment integration

## 🌟 Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **Efficient Rendering**: Minimal DOM manipulation
- **Optimized Assets**: Compressed images and minified code
- **Caching Strategy**: Browser caching for static assets
- **Responsive Images**: Appropriate image sizes for different devices

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Pexels** for high-quality food images
- **Google Fonts** for the Inter font family
- **Vite** for the excellent build tool
- **GitHub Pages** for free hosting

## 📞 Support

If you have any questions or need help with deployment:

1. Check the [Issues](https://github.com/yourusername/foodie-express/issues) page
2. Create a new issue with detailed description
3. Join our community discussions

---

**Built with ❤️ for food lovers everywhere!**

*Ready to deploy? Just push to GitHub and watch your food delivery app go live!*