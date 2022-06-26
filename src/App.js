import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
