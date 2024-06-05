import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import DarkWhiteButton from './Components/dark';


function App() {
  return (
    <>
    
<Navbar title="TextUtils v1.0"/>
<div className="container ">
  <Textform align="centre" heading="Aditya raj" />
  <About/>
  <DarkWhiteButton/>
  </div>

    </>
  );
}

export default App;
