
import './App.css'
import Home from './components/Home'
import AddDoctor from './components/AddDoctor'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import DoctorDetails from './components/DoctorDetails'
function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/addDoctor' element={<AddDoctor/>}/>
              <Route path='/doctorDetails/:id' element={<DoctorDetails/>}/>
              
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
