import { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { Route, Routes } from 'react-router-dom'
import { useUser } from './contexts/UserContext.jsx'

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

import GoogleCreds from '../creds.json'

// TODO: Diferenciar vistas según login

function App() {
  const { user, userCtxLogin, userCtxLogout } = useUser();

  function handleCallbackResponse(response){
    const userObject = jwtDecode(response.credential);

    console.log(userObject);
    if(!user){
      userCtxLogin(userObject);
    }

    document.getElementById("googleLoginDiv").hidden = true;
  }

  function handleSignout(event) {
    userCtxLogout();
    document.getElementById("googleLoginDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: GoogleCreds.web.client_id,
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("googleLoginDiv"),
      { theme: "outline", size: "large" }
    );

  }, [])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='*' element={ <FourOhFour /> }/>
        <Route path='/' element={ 
          /* Si usuario no está logueado */
          <Login />
          /* Si usuario está logueado, <RedeemTicket /> */
        }/>
        <Route path='/signup' element={ <Signup /> }/>
        <Route path='/new-event' element={ <NewEvent /> }/>
        <Route path='/user-details' element={ <UserDetails /> }/>
        <Route path='/edit-user' element={ <EditUserDetails /> }/>
        <Route path='/user-landing' element={ <UserLanding /> }/>
        <Route path='/event/:eventID' element={ <EventInfo />}/>
        <Route path='/edit-event/:eventID' element={ <EditEvent /> } />
        <Route path='/send-event/:eventID' element={ <SendEvent /> } />
        <Route path='/ticket-redeemed' element={ <TicketRedeemed /> } />
      </Routes>
    </>
  )
}

export default App
