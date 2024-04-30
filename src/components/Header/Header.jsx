import React from 'react';
import {Link} from 'gatsby';
import Logo from '../../images/logo.svg';
import {useMenuQuery} from '../../hooks/useMenuQuery'
import Navigation from '../Navigation/Navigation';

import { Wrapper, Content } from './Header.styles';

const Header = () => {
 
    const {site, menu} = useMenuQuery();
    // console.log(menu)

  return (
   <Wrapper>
    <Content>
        <Link to="/">
       <img src={Logo}   alt="Cake-it"  />
       </Link>
       <Navigation menu={menu.menuItems.nodes} />
    </Content>
   </Wrapper>
  )
}

export default Header