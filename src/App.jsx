import './App.css'
import Sidenav from './components/Navbar' 
import Home from './components/Home' 
import Edu from './components/Edu' 
import Work from './components/Work' 
import Projects from './components/Projects' 
import Contact from './components/Contact' 
//import {DarkModeProvider} from './components/Context'

function App() {

  return (
    <>
      <Sidenav />
      <Home/>
      <Work/>
      <Projects/>
      <Edu/>
      <Contact/>
    </>
  )
}

export default App
