import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import Discount from './pages/Discount';
import { Routes, Route, Navigate} from 'react-router-dom';
import Register from './pages/Register';
import "./App.css"
import Detail from './pages/Detail';

function App() {

  
  return(
    <>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" rel="stylesheet"/>

      <Header></Header>
      <div>
        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Category' element={<Category/>}></Route>
          <Route path='/Discount' element={<Discount/>}></Route>
          <Route path='/Register' element={<Register/>} />
          <Route path='/Detail/:id' element={<Detail/>}></Route>
          <Route path='/' element={<Navigate to="/Home" />}></Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
