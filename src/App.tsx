import  { useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import Slideshow from "./Slideshow";
import CardSection from "./CardSection";
import Footer from "./Footer";
import './App.css'
function App() {

  

  useEffect(() => {
    // Make an HTTP GET request to your Gin server's /api/hello endpoint
    axios.get("http://localhost:8080")
      .then(() => {
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <Header/>
      <Slideshow/>
      <CardSection/>
      <Footer/>
    </div>
  );
}

export default App;
