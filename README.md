# Kumami Games Page

A responsive React web application showcasing a collection of games with a modern dark theme inspired by Kumami's design aesthetic.

## 🎮 Features

- **Responsive Design**: Fully responsive grid layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern Dark Theme**: Clean, modern design with a dark color scheme using `#101010` background and vibrant blue accent colors
- **Interactive Game Cards**: Each game card features:
  - High-quality game images with hover effects
  - Game title and detailed description
  - Genre badges with beautiful styling
  - Expandable descriptions with "Read more" functionality
  - Smooth hover animations and transitions
- **Accessibility**: ARIA labels, focus states, and semantic HTML for better accessibility
- **Performance**: Lazy loading images and optimized animations

## 🛠️ Tech Stack

- **React 18** - Modern React with functional components and hooks
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Modern JavaScript (ES6+)** - Clean, modern JavaScript syntax
- **Responsive Design** - Mobile-first approach with flexible grid layouts

## 📁 Project Structure

```
src/
├── components/
│   └── GameCard.js          # Reusable game card component
├── pages/
│   └── GamesPage.js         # Main games page layout
├── data/
│   └── games.js             # Hardcoded game data
├── App.js                   # Main app component
├── index.js                 # React DOM entry point
└── index.css                # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd internkumami
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Design Features

### Color Scheme
- **Background**: `#101010` (Deep black)
- **Cards**: `#1a1a1a` (Dark gray)
- **Accent**: `#0ea5e9` (Vibrant blue)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#a1a1aa` (Light gray)

### Animations
- Smooth hover effects on cards with scale transforms
- Fade-in animations for page elements
- Slide-up animations for game cards with staggered delays
- Glow effects on interactive elements

### Responsive Breakpoints
- **Mobile**: Single column layout
- **Tablet**: 2-column grid layout
- **Desktop**: 3-column grid layout

## 🎮 Game Data

The application displays 5 carefully crafted game entries:

1. **Chaspa** - Web2/Web3 bridge RPG game
2. **Pixel Warriors: Neon Realm** - Cyberpunk action adventure
3. **Ethereal Gardens** - Peaceful farming simulation
4. **Quantum Heist** - Strategic puzzle game
5. **Moonlight Tavern** - Fantasy management game

Each game includes detailed descriptions, genre classifications, and high-quality images.

## 🔧 Customization

### Adding New Games
Edit `src/data/games.js` to add new games with the following structure:
```javascript
{
  "Title": "Game Name",
  "Description": "Game description...",
  "Genre": ["Genre1", "Genre2"],
  "imageUrl": "https://example.com/image.jpg"
}
```

### Styling
The project uses Tailwind CSS with custom theme extensions in `tailwind.config.js`. You can modify colors, spacing, and other design tokens there.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🌟 Future Enhancements

- Search and filter functionality
- Game categories and sorting options
- Individual game detail pages
- User favorites and ratings
- Integration with game APIs
- Dark/light theme toggle

## 📝 License

This project is created for demonstration purposes. All game data is fictional and for showcase only.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using React and Tailwind CSS, inspired by Kumami's beautiful design aesthetic.
