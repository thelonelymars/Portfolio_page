import Header from "./Header";
import CardSection from "./CardSection";
import Footer from "./Footer";
import { Suspense, lazy } from 'react';
const Slideshow = lazy(() => import('./Slideshow'));
import './App.css'
function App() {

  
  return (
    <div className="App">
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Slideshow/>
      </Suspense>
      <CardSection/>
      <Footer/>
    </div>
  );
}

export default App;
