import { Outlet } from "react-router-dom"
import Header from './components/Header'
import Nav from './components/Nav'
function App() {
  return (
    <div className="font-poppins">
     <Header/>
     <Outlet/>
     <Nav/>
    </div>
  )
}

export default App