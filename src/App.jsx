// import './App.css';

// import NetflixSeries from './components/NetflixSeries';
// import Profile from './components/ProfileCard/Profile';
// import './components/Netflix.css';
import './components/Netflix.module.css';
// import {EventHandling} from './components/EventHandling';
import {EventProps} from './components/EventProps';

function App() {
    return (
        <section className="container">
            {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
            {/* <NetflixSeries /> */}
            {/* <Profile /> */}
            {/* <EventHandling /> */}
            <EventProps />
        </section>
    );
}

export default App;
