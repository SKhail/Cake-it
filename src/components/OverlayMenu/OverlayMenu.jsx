import React from 'react'
import {Link} from 'gatsby';
import {Overlay} from './OverlayMenu.styles'
import { useMenuQuery } from '../../hooks/useMenuQuery'; // passing the graphql data 
import InvertedLogo from "../../images/logo-inverted.svg"
import CloseButton from "../../images/close_btn.svg"

const OverlyMenu = ({menuOpen, callback}) => {

 const { menu } = useMenuQuery();

  return (
   <Overlay menuOpen={menuOpen}>
    <div className='inner'>
        <img className='invertedLogo' src={InvertedLogo} alt='whiteLogo'></img>
        <ul className='overlayMenu'>
         {menu.menuItems.nodes.map(item => (
          !item.parentId ? (
            <li key={item.id}> 
            <Link to={item.url} activeClassName='overlayActive'>
             {item.label}
                </Link> 
            </li>
          ) : null
         ))}   
        </ul>
        {/* closing button start */}
        <div 
        className='closeButton'
        onClick={callback}
        role='button'
        tabIndex='0'
        onKeyDown={callback}

        >
            <img src={CloseButton} alt="close-button" />
        </div>
    </div>
    {/* closing button end */}
   </Overlay>
  )
}

export default OverlyMenu