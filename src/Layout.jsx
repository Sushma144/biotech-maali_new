import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';


const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;