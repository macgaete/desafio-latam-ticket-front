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

// TODO: Diferenciar vistas según login

function App() {
  const { user } = useUser()

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='*' element={ <FourOhFour /> }/>
        <Route path='/' element={ !user.isLoggedIn && <Login /> }/>
        <Route path='/' element={ user.isLoggedIn && <RedeemTicket /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/signup' element={ <Signup /> }/>
        <Route path='/new-event' element={ <NewEvent /> }/>
        <Route path='/user-details' element={ <UserDetails /> }/>
        <Route path='/edit-user' element={ <EditUserDetails /> }/>
        <Route path='/user-landing' element={ <UserLanding /> }/>
        <Route path='/event/:eventID' element={ <EventInfo />}/>
        <Route path='/edit-event/:eventID' element={ <EditEvent /> }/>
        <Route path='/send-event/:eventID' element={ <SendEvent /> }/>
        <Route path='/ticket-redeemed' element={ <TicketRedeemed /> }/>
      </Routes>
    </>
  )
}

export default App
