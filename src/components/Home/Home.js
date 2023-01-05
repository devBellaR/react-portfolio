import React from 'react';
import NavBar from '../Navbar/NavBar';

// Styles
import { 
  HomePageContainer, 
  HomePage, 
  TitleContainer,
  Button
} from './HomeStyles';

const Home = () => {
  return (
    <HomePageContainer>
        <NavBar/>
        <HomePage>
          <TitleContainer>
            <h1>Lorem ipsum dolor</h1>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </TitleContainer>
            <Button>Contact</Button>
        </HomePage>
    </HomePageContainer>
  )
}

export default Home;