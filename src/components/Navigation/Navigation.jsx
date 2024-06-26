import React from 'react'
import {Link} from 'gatsby';
import { Wrapper } from './Navigation.styles';

const Navigation = ({ menu }) => {
  return (
   <Wrapper>
    <ul>
    {menu.map(mainItem =>
    !mainItem.parentId ? (
        <li key={mainItem.id}>
            <Link to={mainItem.url} activeClassName='nav'>
                {mainItem.label}
                {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
            </Link>
         {mainItem.childItems.nodes.length !== 0 ? (
            <ul>
                {mainItem.childItems.nodes.map(childItems => (
                <li key={childItems.id}>
                    <Link to={childItems.url} activeClassName='nav-active'>
                        {childItems.label}
                    </Link>
                </li>
                ))}
            </ul>
         ) : null}
            </li>
         ) : null
        )}
    </ul> 
    </Wrapper>
  )
}

export default Navigation