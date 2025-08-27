import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import CryptoPriceBar from './components/CryptoPriceBar';
import Trending from "./pages/Trending";
import Footer from './components/Footer';
import GamesPage from './pages/GamesPage';
import DetailGame from './pages/DetailGame';
import FeaturedGame from "./pages/FeaturedGame";
import './index.css';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 0', color: '#fff' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <CryptoPriceBar />
        <GamesPage />
        <Footer />
      </>
    ),
    errorElement: <NotFound />, 
  },
  {
    path: "/games",
    element: (
      <>
        <Navbar />
        <CryptoPriceBar />
        <GamesPage />
        <Footer />
      </>
    ),
    errorElement: <NotFound />, 
  },
  {
    path: "/detail-game",
    element: (
      <>
        <Navbar />
        <CryptoPriceBar />
        <DetailGame />
        <Footer />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/Trending",
    element: (
      <>
        <Navbar />
        <CryptoPriceBar />
        <Trending />
        <Footer />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/featured-games",
    element: (
      <>
        <Navbar />
        <CryptoPriceBar />
        <FeaturedGame />
        <Footer />
      </>
    ),
    errorElement: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
