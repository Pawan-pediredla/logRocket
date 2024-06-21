// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";
// import '../comp/Nvabar.css'
// import { useMediaQuery } from "react-responsive";

// export default function Navbar() {
//   const [menu,setMenu] =useState(false) ;
//    const isMobile = useMediaQuery({ maxWidth: "1150px" });

//   const togglemnu=()=>{
//     setMenu(!menu)
//   }
//   const closeOnmobile=()=>{
//     if (isMobile) {
//       setMenu(false);

      
//     }
//   }
//   return (
//    <header className="header">
//     <nav className="nav-container" >
//       <NavLink  to='/'  className='nav__logo' >
// Navigation Bar
//       </NavLink>
//       <div className={`nav__menu ${menu?"show-menu":""}` }
//          id="nav-menu"
// >
//         <ul className="nav__list"  >
//           <li className="nav__item" >
//             <NavLink to='/'className="nav__link" >
//             Home

//             </NavLink>
//           </li>
//           <li className="nav__item"  >
//             <NavLink   to='/news' className='nav__link'>
//             News

//             </NavLink>
//           </li>
//           <li className="nav__item"   >
//             <NavLink to='/about-us'
//                className="nav__link" >  
//               About
//             </NavLink>
//           </li >
//           <li className="nav__item">
//             <NavLink  to='/favorite'
//                className="nav__link">
//               Favorite
//             </NavLink>
//           </li>
//           <li className="nav__item">
//             <NavLink      to="/location"
//                className="nav__link" >
//                 location</NavLink>
//           </li>
//           <li className="nav__item">
//             <NavLink to="/get-started" className="nav__link nav__cta"  >
//               Get started
//             </NavLink>
//           </li>
//         </ul>
       

//       </div>
//       <div  className="nav__close" id="nav-close"  onClick={togglemnu}  >
//       <IoMenu />

//           </div>
//           <div className="nav__toggle" id="nav-toggle"  onClick={togglemnu}>
//          <IoMenu />
//        </div>
//     </nav>
//    </header>
//   )
// }
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./Nvabar.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";
    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/location"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Location
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/get-started"
            className={`${linkClassName} ${buttonClassName}`}
            onClick={closeMobileMenu}
          >
            Get Started
          </NavLink>
        </li>
      </ul>
    );
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Navigation Bar
        </NavLink>
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}
        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};
export default Navbar;