import React from 'react'
import { landingNavLink } from '../../constants/landingNavLink'

const NavLinkLanding = () => {
  const columnSize = 6;
  const columnCount = Math.ceil(landingNavLink.length / columnSize);
  const columns = [];

  for (let i = 0; i < columnCount; i++) {
    const startIndex = i * columnSize;
    const endIndex = startIndex + columnSize;
    const columnItems = landingNavLink.slice(startIndex, endIndex);

    const columnContent = (
      <ul key={i}>
        {columnItems.map((navLink, index) => (
          <li key={index} className='mr-32'>
            <a href={navLink.href} className='sub-menu-item'>
              {navLink.label}
              {navLink.badge && (
                <span className={navLink.badgeClassName}>{navLink.badge}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    );

    columns.push(columnContent);
  }

  return <div className="submenu megamenu">{columns}</div>;
}

export default NavLinkLanding