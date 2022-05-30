import Navigation from './components/Navigation'
import Header from './components/Header';
import ClaimsSection from './components/ClaimsSection';
import './styles/style.scss';
import './styles/claims.scss';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <ClaimsSection/>
    </div>
  );
}

export default App;
