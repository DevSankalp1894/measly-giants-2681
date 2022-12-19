import logo from './logo.svg';
import './App.css';
import Nav from './Navbar/Nav.jsx';
import Form from './Forms/Forms'
import TextImage from './Forms/TextImage'
import UpSkill from './Forms/UpSkill'
import Footer from './Footer/Footer'
import SignIn from './Forms/SignIn'
import Intern from './Pages/Intern.jsx';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Form/>
      <TextImage/>
      <UpSkill/>
      <Footer/>
      <SignIn/>
      <Intern/>
      
    
      
      
    </div>
  );
}

export default App;
