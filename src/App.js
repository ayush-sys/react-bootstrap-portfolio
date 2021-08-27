import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import About from './components/About';
import Education from './components/Education';
import Contacts from './components/Contacts';


function App() {
  return (
    <>
      <Navbar />
      <About/>
      <Technologies/>
      <Education/>
      <Contacts/>
    </>
  );
}

export default App;
