import AdventureFeature from 'features/Adventure';
import LiveFeature from 'features/Live';
import PlanFeature from 'features/Plan';
import TravelFeature from 'features/Travel';
import TravelsFeature from 'features/Travels';
import WorkFeature from 'features/Work';
import './App.css';
import Header from './features/Header/Header';
import MainBodyFeature from './features/MainBody';

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
        </div>
    );
}

export default App;
