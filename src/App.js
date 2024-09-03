import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './register/Register';
import Book from './books/Book';
import Home from './register/Home';
import Login from './login/Login';
       // Adjust the import path as needed

function App() {
  const [userDetails, setUserDetails] = useState(null);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register setUserDetails={setUserDetails}/>}/>
          <Route path="/login" element={<Login setUserDetails={setUserDetails}/>}/>
          <Route path="/books" element={<Book />} />
          <Route path="/home" element={<Home userDetails={userDetails} setUserDetails={setUserDetails}/>} />
        </Routes>
      </div>
    
    </Router>
  );
}
export default App;
