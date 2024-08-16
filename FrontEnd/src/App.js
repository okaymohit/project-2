import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import About from './About';
import Homepage from './Homepage';
import AppointmentSuccess from './AppointmentSuccess';
import Account from './Account';
import Registration from './Registration';
import MedicineHandler from './MedicineHandler';
import SingleProdcutDecs from './SingleProdcutDecs';
import UserProfile from './UserProfile';
import Navbar from './Navbar';
function App() {
  return (
    <>
          <BrowserRouter>
            <Navbar />
   
            <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/appointmentMail' element={<AppointmentSuccess />}></Route>
              <Route path='/login' element={<Account />}></Route>
              <Route path='/registration' element={<Registration />}></Route>
              <Route path='/medicens' element={<MedicineHandler />}></Route>
              <Route path='/singleProduct' element={<SingleProdcutDecs />}></Route>
              <Route path='/logout' element={<UserProfile />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter> 

    </>
  );
}

export default App;
