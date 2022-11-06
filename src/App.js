import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './views/pages/home/HomePage.component';
import ShopPage from './views/pages/shop/ShopPage.component';

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact name="homePage" path="/" element={<HomePage/>} />
        <Route name="shopPage" path="/shop" element={<ShopPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
