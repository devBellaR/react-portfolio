// Components
import Home from './components/Home/Home';
import GlobalStyles from './GlobalStyles';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Home/>
      <Services/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
