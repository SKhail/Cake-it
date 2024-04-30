import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Hamburger from '../Hamburger/Hamburger'; //Hamburger logo
import OverlyMenu from '../OverlayMenu/OverlayMenu';
import Footer from '../../components/Footer/Footer';
import { GlobalStyles, Primary } from './Layout.styles'; //importing the styles component 


const Layout = ({ children }) => {

    const [menuOpen, setMenuOpen] = useState(false);  

    const handleOverlayMenu = () => setMenuOpen(prev => !prev) // this function enable the toggle ability for the hamburger
    

  return (
    <>
    <GlobalStyles />
    <Hamburger handleOverlayMenu={handleOverlayMenu} />
    <OverlyMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
    <Header/>
    <Primary>{children}</Primary>
    <Footer />
    </>
  );
};

export default Layout