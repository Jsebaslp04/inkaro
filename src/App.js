import Header from './containers/Header/Header'
import Separator from './components/Separator/Separator';
import MainBanner from './components/MainBanner/MainBanner';
import Banner from '../src/assets/main_banner.jpg';
import image2 from '../src/assets/image_main_banner_2.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <Separator height={40} color="red" />
      <MainBanner image={Banner} alt="Main Banner" />
      <Separator height={40} color="green" />
      <MainBanner image={image2} alt="New Image" />
      <Separator height={20} color="blue" />
    </div>
  );
}

export default App;
