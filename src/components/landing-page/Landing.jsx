import './Landing.css';
import SignOn from './sign-on/SignOn.jsx';
import Cards from './cards/Cards.jsx';
import GetStarted from './get-started/GetStarted.jsx';

function Landing(props) {
    return (
        <div className="landing">
            <SignOn />
            <Cards />
            <GetStarted  />
        </div>
    );
}

export default Landing;