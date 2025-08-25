
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import CryptoPriceBar from './components/CryptoPriceBar';
import AboutUs from './pages/about';
import Trending from "./pages/Trending";
import Footer from './components/Footer';
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
        <AboutUs />
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
