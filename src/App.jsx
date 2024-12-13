// import './App.css';

// import NetflixSeries from './components/NetflixSeries';
// import Profile from './components/ProfileCard/Profile';
// import './components/Netflix.css';
import DerivedState from './components/hooks/DerivedState';
import './components/Netflix.module.css';
// import {EventHandling} from './components/EventHandling';
// import {EventProps} from './components/EventProps';
// import EventPropagation from './components/EventPropagation';
// import State, {SiblingComponent} from './components/hooks/State';

function App() {
    return (
        <section className="container">
            {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
            {/* <NetflixSeries /> */}
            {/* <Profile /> */}
            {/* <EventHandling /> */}
            {/* <EventProps /> */}
            {/* <EventPropagation /> */}
            {/* <State /> */}
            <DerivedState />
            {/* <SiblingComponent /> */}
        </section>
    );
}

export default App;
