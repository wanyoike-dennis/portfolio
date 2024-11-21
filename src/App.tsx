
import NavBar from './components/AppNavBar';
import ContactUs from './components/ContactUs';
import useTodos from './hooks/useTodos';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './components/home';
import ProjectPage from './components/projects';
import AboutPage from './components/about';



function App() {

  const {
    todos,
        setTodos,
        setToDoCompeted,
        addTodo,
        deleteTodo,
        deleteAllCompletedTodos
  } = useTodos();


  return (
    <main>
      <NavBar/>
      <HomePage/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/projects' element={<ProjectPage/>}/>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contacts" element={<ContactUs />} />
      </Routes>
    </main>
    
        
  )
}

export default App;
