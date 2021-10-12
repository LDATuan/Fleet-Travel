import AdventureFeature from 'features/Adventure';
import BrowseFeature from 'features/Browse';
import LiveFeature from 'features/Live';
import PlacesFeature from 'features/Places';
import PlanFeature from 'features/Plan';
import TravelFeature from 'features/Travel';
import TravelsFeature from 'features/Travels';
import WorkFeature from 'features/Work';
import './App.css';
import Header from './features/Header/Header';
import MainBodyFeature from './features/MainBody';
import './components/Styles/reset.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <MainBodyFeature />
            <AdventureFeature />
            <TravelFeature />
            <WorkFeature />
            <LiveFeature />
            <TravelsFeature />
            <PlanFeature />
            <BrowseFeature />
            <PlacesFeature />
        </div>
    );
}

export default App;
