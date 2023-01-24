import React from 'react';
import NavBar from '../Navbar/NavBar';
import { Link } from 'react-scroll';

// Styles
import { 
  HomePageContainer, 
  HomePage, 
  TitleContainer,
  InfoButton,
  ContactButton
} from './HomeStyles';

// Animations
import { backgroundAnim, titleAnim, buttonAnim } from '../../Animations';

const Home = () => {

  return (
    <HomePageContainer
            variants={backgroundAnim}
            initial="hidden"
            animate="show"
    >
        <NavBar/>
        <HomePage>
          <TitleContainer
            variants={titleAnim}
            initial="hidden"
            animate="show"
          >
            <h1>Lorem ipsum dolor</h1>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </TitleContainer>
            <Link to="Services" smooth={true}>
              <InfoButton 
                variants={buttonAnim}
                initial="hidden"
                animate="show"
              >Learn more
              </InfoButton>
            </Link>
            <Link to="Contact" smooth={true}>
              <ContactButton variants={buttonAnim}>
                Contact
              </ContactButton>
            </Link>
        </HomePage>
    </HomePageContainer>
  )
}

export default Home;