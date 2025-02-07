import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Overview from './components/Overview';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import {Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
      {/* <Route path='/dashboard/*' element={<Dashboard/>}>
        <Route path='' element={<Overview/>}/>
        <Route path='users' element={<UserList/>}/>
        <Route path='users/add' element={<UserForm/>}/>
      </Route> */}
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Overview />} /> {/* Default route inside Dashboard */}
        <Route path="users" element={<UserList />} />
        <Route path="users/add" element={<UserForm />} />
      </Route>
    </Routes>
  );
}

export default App;
