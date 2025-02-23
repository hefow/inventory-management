import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Overview from './components/Overview';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import {Routes} from 'react-router-dom'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Overview />} /> {/* Default route inside Dashboard */}
        <Route path="users" element={<UserList />} />
        <Route path="users/add" element={<UserForm />} />
        <Route path='products' element={<ProductList/>}/>
        <Route path='products/add' element={<ProductForm/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
