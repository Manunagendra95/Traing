import { Route,Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './Components/ProtectedRoute'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import StudentContextsss from './Components/StudentContext'
import Studentone from './Components/Studentone'
import Counter from './Components/Counter'

function App() {

  const studentName = "Nagendra";

  return (
    <>
    <Counter />
    <StudentContextsss.Provider value={studentName}><Studentone/></StudentContextsss.Provider>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      
      </Routes>
    </>
      
  )
}

export default App
