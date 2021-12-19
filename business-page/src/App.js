import './App.css';

import Items from './components/Items'
import MenuBar from './components/MenuBar'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs';

function App(){
    return (
      <div>
        <MenuBar/>
        <AboutUs/>     
        <Items/>
        <Footer/>      
      </div>
    );    
  }

export default App;