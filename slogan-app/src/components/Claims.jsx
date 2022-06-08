import {ENTER, INDEX, NEW, INCOMING} from '../constants/routes.js';
import Navigation from './Navigation'
import Header from './Header';
import Enter from './Enter';
import ClaimsSection from './ClaimsSection';
import NewClaimSection from './NewClaimSection';
import IncomingClaimSection from './IncomingClaimSection';
import '../styles/style.scss';
import '../styles/claims.scss';
import {Routes, Route, useLocation} from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const isEnterLocation = location.pathname === '/enter';
  if (isEnterLocation) {
    return (
      <div className="App">
        <Routes>
          <Route path = {ENTER} element={<Enter/>} />
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