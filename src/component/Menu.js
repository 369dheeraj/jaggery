import React, { useState } from 'react';
import '../stylesheet/menu.css';

function Menu() {
  const options = [
    { label: 'Menu', subItems: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Category', subItems: ['Category 1', 'Category 2', 'Category 3'] },
    { label: 'Product', subItems: ['Product 1', 'Product 2', 'Product 3'] },
    { label: 'About', subItems: [] }, // No dropdown for About
    { label: 'Contact', subItems: ['Contact 1', 'Contact 2'] }
  ];

  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <ul className="menu">
        {options.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item.label}
            {item.subItems.length > 0 && openDropdown === index && (
              <ul className="submenu">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
