import './App.css';
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/Home';
import Profile from './pages/profile';
import Templates from './pages/Templates/Index';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path='/templates/:id' element={<ProtectedRoute><Templates/></ProtectedRoute>}/>

      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props){
  if(localStorage.getItem('Buildresume-user')){
    return props.children
  }else{
    return <Navigate to='/login'/>
  }
}