import Navigation from './Navigation'
import Header from './Header';
import Enter from './Enter';
import ClaimsSection from './ClaimsSection';
import NewClaimSection from './NewClaimSection';
import IncomingClaimSection from './IncomingClaimSection';
import '../styles/style.scss';
import '../styles/claims.scss';
import {Routes, Route, useLocation} from 'react-router-dom';

function App() {
  let location = useLocation();
  if (location.pathname == '/enter'){
    return (
      <>
      <div className="App">
        <Routes>
          <Route path = '/enter' element = {<Enter/>}/>
        </Routes>
      </div>
    </>
    );
  }
  else{
    return (
      <>
      <div className="App">
        <Navigation/>
        <Header/>
        <Routes>
          <Route path = '/' element = {<ClaimsSection/>}/>
          <Route path = '/new_claim' element = {<NewClaimSection/>}/>
          <Route path = '/incoming_claim' element = {<IncomingClaimSection/>}/>
        </Routes>
      </div>
    </>
    );
  }
}

export default App;
