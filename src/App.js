import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import NoteState from './Components/Context/notes/NoteState';
import Alert from './Components/Alert';


function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message={"Amazing App"} type={"success"}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route exact path='/about' element={<About />}>
              </Route>
            </Routes>
          </div>
        </Router>
      </NoteState>

    </>
  );
}

export default App;
