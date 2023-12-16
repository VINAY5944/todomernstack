import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Showalltask from './components/Showalltask';
import Adddtask from './components/Adddtask';
import Updatestats from './components/Updatestats';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>

<Route   element={<Login/>}   path='/'/>


<Route element={<Signup/>} path='/signup'/>
<Route element={<Showalltask/>} path='/alltask'/>

<Route element={<Adddtask/>} path='/addtask'/>



<Route element={<Updatestats/> }path='/updatestats/:id'/>
</Routes>




</BrowserRouter>


   
    </div>
  );
}

export default App;
