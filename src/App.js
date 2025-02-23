import Header from './containers/Header/Header'
import Separator from './components/Separator/Separator';
import MainBanner from './components/MainBanner/MainBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <Separator width="100%" height="16px" display="block" />
      <MainBanner />
      <Separator width="100%" height="16px" display="block" />
    </div>
  );
}

export default App;
