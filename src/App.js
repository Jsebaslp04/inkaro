import Header from './containers/Header/Header'
import Separator from './components/Separator/Separator';
import MainBanner from './components/MainBanner/MainBanner';
import Banner from '../src/assets/main_banner.jpg';
import Service from './components/Service/Service';


function App() {
  return (
    <div className="App">
      <Header />
      <Separator height={16} />
      <MainBanner image={Banner} alt="Main Banner" />
      <Separator height={16} />
      <Service />
      <Separator height={16} />
      
    </div>
  );
}

export default App;
