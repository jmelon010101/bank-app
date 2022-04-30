import './App.css';
import Landing from './components/landing-page/Landing.jsx';
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/common/header/Header';
import { About } from './components/about/About';
import { Mortgage } from './components/mortgage/Mortgage';
import { Checking } from './components/checking/Checking';
import { Savings } from './components/savings/Savings';
import { Features } from './components/features/Features';
import { Pricing } from './components/pricing/Pricing';
import { ErrorPage } from './components/error-page/ErrorPage';
import Accountsummary from './components/account-summary/AccountSummary';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/mortgage" element={<Mortgage />} />
        <Route path="/checking" element={<Checking />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/account-summary" element={<Accountsummary />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
