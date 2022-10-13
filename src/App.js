import {Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import Homepage from './Pages/Homepage/Homepage.component';
import Navigation from './Components/navigation/navigation.component';
import Contact from './Pages/contact/contact.component';
import './App.css';


function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<Navigation />} >
        <Route path="/" element={<Homepage />} />
        <Route path='contact' element={<Contact />} />
        
        <Route path='home' index element={<Homepage />} />
        </Route>
     </Routes>
    </div>
  );
}

export default App;
