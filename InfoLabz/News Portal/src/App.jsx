import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Selection from './Components/Selection';

function App() {

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Select and Button */}
      <Selection />

      {/* Footer Section */}
      <Footer />

      {/* Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />
    </>
  );
}

export default App;