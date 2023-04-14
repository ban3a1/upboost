import Main from './components/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/Form/SignIn';
import SignUp from './components/Form/SignUp';
import Recover from './components/Form/Recover'
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Services from './components/Services/Services';  


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main />}/>
        <Route path="/signin" element={ <SignIn />}/>
        <Route path="/signup" element={ <SignUp />}/>
        <Route path="/recover" element={ <Recover />}/>
        <Route path="/contacts" element={ <Contacts />}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/services" element={ <Services />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
