import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

// Vistas
import Login from './views/Login'
import FourOhFour from './views/FourOhFour'
import Signup from './views/Signup'
import NewTicket from './views/NewTicket'
import UserDetails from './views/UserDetails'
import UserLanding from './views/UserLanding'
import EditUserDetails from './views/EditUserDetails'

// TODO: Diferenciar vistas según login

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='*' element={ <FourOhFour /> }/>
        <Route path='/' element={ <Login /> }/>
        <Route path='/signup' element={ <Signup /> }/>
        <Route path='/new-ticket' element={ <NewTicket /> }/>
        <Route path='/user-details' element={ <UserDetails /> }/>
        <Route path='/edit-user' element={ <EditUserDetails /> }/>
        <Route path='/user-landing' element={ <UserLanding /> }/>
      </Routes>
    </>
  )
}

export default App
