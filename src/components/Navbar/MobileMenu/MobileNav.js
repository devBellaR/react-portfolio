import React, { useState } from 'react';
import { Link } from 'react-scroll';

// Styling imports
import { 
    MobileContainer,
    MobileLinksContainer,
    MobileLinks 
} from './MobileNavStyles'

// Components for hamburger menu
import ToggleMenu from './ToggleMenu';

const MobileNav = (props) => {

    // const navLinks = [
    // {
    //   label: "About",
    //   id: "about"
    // },
    // {
    //   label: "Services",
    //   id: "services"
    // },
    // {
    //   label: "Portfolio",
    //   id: "portfolio"
    // },
    // {
    //   label: "Contact",
    //   id: "contact"
    // },
    // ]; 

    // Hamburger menu toggle and open mobile menu
    const [ isOpen, setIsOpen ] = useState(false);

    // Closing mobile menu when scrolling on element
    const handleClick = () => {setIsOpen(!isOpen)};
    
    return (
        <MobileContainer>
            <ToggleMenu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}/>
                {isOpen && (
                    <MobileLinksContainer>
                        {/* {navLinks.map(item => {
                            return (
                            <MobileLinks key={item.id}>
                                <Link to={item.id}
                                    smooth={true} 
                                    onClick={handleClick}>
                                    {item.label}
                                </Link>
                            </MobileLinks>
                            );
                        })} */}
                        <MobileLinks>
                            <Link to="Services" 
                                smooth={true} 
                                onClick={handleClick}>
                                Services
                            </Link>
                        </MobileLinks>
                        <MobileLinks>
                            <Link to="Portfolio" 
                                smooth={true} 
                                onClick={handleClick}>
                                Portfolio
                            </Link>
                        </MobileLinks>
                        <MobileLinks>
                            <Link to="About" 
                                smooth={true} 
                                onClick={handleClick}>
                                About
                            </Link>
                        </MobileLinks>
                        <MobileLinks>
                            <Link to="Contact" 
                                smooth={true} 
                                onClick={handleClick}>
                                Contact
                            </Link>
                        </MobileLinks>
                    </MobileLinksContainer>
            )}
        </MobileContainer>
    );
}

export default MobileNav;