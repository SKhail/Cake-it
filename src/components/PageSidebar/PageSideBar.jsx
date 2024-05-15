import React from 'react';
import { Link } from 'gatsby';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import PageIcon from '../../images/Page-icon.svg';
import { Wrapper, Menu } from './PageSidebar.styles';

const PageSideBar = ({ children = { nodes: [] }, parentChildren, currentPage, parent }) => {

    const getParentContent = () => {
        // Page with children 
        return (
          <>
            <li className='sidebar-menu-header'>
              <img src={PageIcon} alt='CakePage' />
              <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            </li>
            {children.nodes.map(child => (
              <li key={child.id}>
                <Link to={child.uri}>
                  <span dangerouslySetInnerHTML={{ __html: child.title }} />
                </Link>
              </li>
            ))}
          </>
        );
    };
    const getChildContent = () => (
        <>
        <li className='sidebar-menu-header'>
        <img src={PageIcon} alt='CakePage' />
        <span dangerouslySetInnerHTML={{ __html: parent }} />
        </li>
        {parentChildren.map(child => (
            <li key={child.id}>
              <Link to={child.id}>
                <span dangerouslySetInnerHTML={{__html: child.title}} />
              </Link>
            </li>
        ))}
        </>
    )

    return (
      <Wrapper>
        {children.nodes.length === 0 && !parent ? (
          <SidebarMessage />
        ) : (
          <Menu>{parent ? getChildContent() : getParentContent()}</Menu>
        )}
      </Wrapper>
    );
}

export default PageSideBar;
