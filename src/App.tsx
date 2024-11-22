
import NavBar from './components/AppNavBar';
import ContactUs from './components/ContactUs';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './components/home';
import ProjectPage from './components/projects';
import AboutPage from './components/about';



function App() {
  return (
    
    <main>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/projects' element={<ProjectPage/>}/>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contacts" element={<ContactUs />} />
      </Routes>
    </main>
    
        
  )
}

export default App;
