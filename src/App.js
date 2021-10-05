import AdventureFeature from 'features/Adventure';
import TravelFeature from 'features/Travel';
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
        </div>
    );
}

export default App;
