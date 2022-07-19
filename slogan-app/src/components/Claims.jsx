import {ENTER, INDEX, NEW, INCOMING, REG} from '../constants/routes.js';
import Navigation from './Navigation'
import Header from './Header';
import Enter from './Enter';
import Registration from './Registration';
import ClaimsSection from './ClaimsSection';
import NewClaimSection from './NewClaimSection';
import IncomingClaimSection from './IncomingClaimSection';
import '../styles/style.scss';
import '../styles/claims.scss';
import {Routes, Route, useLocation} from 'react-router-dom';


const App = () => {
  localStorage.setItem('search','');
  localStorage.setItem('pageset', 0);
  if(sessionStorage.getItem('authorized') == null){
    sessionStorage.setItem('authorized', 0);
  }
  const location = useLocation(); 
  const isEnterLocation = location.pathname === '/login';
  const isRegistrationLocation = location.pathname === '/registration';
  if((sessionStorage.getItem('authorized') == 0) && !(isEnterLocation || isRegistrationLocation)){
    window.location.replace("/login");
  }
  if (isEnterLocation || isRegistrationLocation) {
    return (
      <div className="App">
        <Routes>
          <Route path = {ENTER} element={<Enter/>} />
          <Route path = {REG} element = {<Registration/>}/>
        </Routes>
      </div>
    );
  }
  else{
    return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes>
        <Route path={INDEX} element={<ClaimsSection />} />
        <Route path={NEW} element={<NewClaimSection />} />
        <Route path={INCOMING} element={<IncomingClaimSection />} />
      </Routes>
    </div>
    );
  }
}
export default App;