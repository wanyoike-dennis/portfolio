
import NavBar from './components/AppNavBar';
import ContactUs from './components/ContactUs';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './components/home';
import ProjectPage from './components/projects';
import AboutPage from './components/about';
import useProjects from './hooks/useProjects';
import { Project } from './types/projects';



function App() {
  
  const { projects } = useProjects()



  return (
    
    <main>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage projects={projects}/>}/>
        <Route path='/projects' element={<ProjectPage projects={projects}/>}/>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contacts" element={<ContactUs />} />
      </Routes>
    </main>
    
        
  )
}

export default App;
