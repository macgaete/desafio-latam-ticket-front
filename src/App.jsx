import { Route, Routes } from 'react-router-dom'

// Componentes
import Navbar from './components/Navbar'

// Vistas
import Login from './views/Login'
import FourOhFour from './views/FourOhFour'
import Signup from './views/Signup'
import NewEvent from './views/NewEvent'
import UserDetails from './views/UserDetails'
import UserLanding from './views/UserLanding'
import EditUserDetails from './views/EditUserDetails'
import EventInfo from './views/EventInfo'
import EditEvent from './views/EditEvent'
import SendEvent from './views/SendEvent'
import RedeemTicket from './views/RedeemTicket'
import TicketRedeemed from './views/TicketRedeemed'

import { useUser } from './contexts/UserContext.jsx'

// TODO: Diferenciar vistas según rol

function App() {
  const { user } = useUser()

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='*' element={ <FourOhFour /> }/>
        <Route path='/event/:eventID' element={ <EventInfo />}/>
        <Route path='/ticket-redeemed' element={ <TicketRedeemed /> }/>
        { !user.isLoggedIn ? 
        /* Si no está logueado */
        <>
          <Route path='/' element= { <Login /> } />
          <Route path='/login' element={ <Login /> }/>
          <Route path='/signup' element={ <Signup /> }/>
        </>
        :
        /* Si está logueado */
        ( user.isOrganizer ?
        <>
          <Route path='/' element={ <RedeemTicket /> }/>
          <Route path='/create-event' element={ <NewEvent /> }/>
          <Route path='/edit-event/:eventID' element={ <EditEvent /> }/>
          <Route path='/send-event/:eventID' element={ <SendEvent /> }/>
          <Route path='/user-landing' element={ <UserLanding /> }/>
          <Route path='/user-details' element={ <UserDetails /> }/>
          <Route path='/edit-user' element={ <EditUserDetails /> }/>
        </>
        :
        <>
          <Route path='/' element={ <RedeemTicket /> }/>
          <Route path='/user-landing' element={ <UserLanding /> }/>
          <Route path='/user-details' element={ <UserDetails /> }/>
          <Route path='/edit-user' element={ <EditUserDetails /> }/>
        </>
        )
        }
      </Routes>
    </>
  )
}

export default App
