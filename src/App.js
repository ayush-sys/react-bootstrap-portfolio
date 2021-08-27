import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import About from './components/About';
import Education from './components/Education';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import WorkExpereince from './components/Workexpereince';


function App() {
  return (
    <div className="container">
      <Navbar />
      <About/>
      <Education/>
      <Technologies/>
      <Projects/>
      <WorkExpereince/>
      <Contacts/>
    </div>
  );
}

export default App;
