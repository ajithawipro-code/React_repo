import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

function App(){

    const {logout} = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" element={
                <>

            <Navbar />
            <Home />            
            
            </>
        } />


        <Route path="/login" element = {
           <>
           
           <Navbar />
           <Login />           
           </>


        } />


        <Route path="/studentData" element={
        <ProtectedRoute>
            <Navbar />
            <AddStudent />
            <StudentList />
            <button onClick={logout}>Logout</button>
            </ProtectedRoute>
            
        } />
        </Routes>
       

    )
}

export default App;