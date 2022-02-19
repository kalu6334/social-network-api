import Posts from "./components/Posts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Tweet from "./components/Tweet";

function App() {
  return (
    <Container>
      <Router> 
        <Navbar/> 
        <Routes>
         <Route  path="/" element={<Posts/>}/>  
         <Route  path="/login" element={<Login/>}/> 
         <Route  path="/signup" element={<Signup/>}/> 
         <Route  path="/tweet" element={<Tweet/>}/> 
        </Routes>        
      </Router>
    </Container>
  );
}

export default App;
