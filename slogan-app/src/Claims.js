import Navigation from './components/Navigation'
import Header from './components/Header';
import ClaimsSection from './components/ClaimsSection';
import NewClaimSection from './components/NewClaimSection';
import IncomingClaimSection from './components/IncomingClaimSection';
import './styles/style.scss';
import './styles/claims.scss';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
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

export default App;
