import React from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { Size } from '../Responsive/responsive';

// Styles
import { 
  NavContainer, 
  Logo,
  NavLinksContainer, 
  NavLinks,
} from './NavBarStyles';

// Components
import MobileNav from './MobileMenu/MobileNav';

const NavBar = () => {

  // Mobile responsive
  const isMobile = useMediaQuery({maxWidth: Size.tablet});
  
  return (
    <NavContainer>
            <Logo>Logo</Logo>
            {!isMobile && 
              <NavLinksContainer>
                <NavLinks>
                   <Link to="Services" 
                         smooth={true}
                         offset={-100}>
                         Services</Link>
                </NavLinks>
                <NavLinks>
                    <Link to="Portfolio" 
                          smooth={true}
                          offset={-70}>
                          Portfolio</Link>
                </NavLinks>
                <NavLinks>
                    <Link to="About"
                          smooth={true}
                          offset={-70}>
                          About</Link>
                </NavLinks>
                <NavLinks>
                    <Link to="Contact" 
                          smooth={true}
                          offset={-70}>
                          Contact</Link>
                </NavLinks>
            </NavLinksContainer>
            }
            {isMobile && <MobileNav/>}
        </NavContainer>
    );
}

export default NavBar;
