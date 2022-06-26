import './App.css';
import Home from './Home/Home';
import { Routes, Route} from "react-router-dom";
import Token from './component/Token';
import Apply from './component/Apply';
import Nft from './component/Nft';
import Document from './component/Document';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='tokenManagement' element={<Token/>}></Route>
          <Route path='apply' element={<Apply/>}></Route>
          <Route path='nft' element={<Nft/>}></Route>
          <Route path='document' element={<Document/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
