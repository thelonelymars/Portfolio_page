import  { useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import Slideshow from "./Slideshow";
import CardSection from "./CardSection";
import Footer from "./Footer";
import './App.css'
function App() {

  const images = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4avihcY2aYmg3obVqvbNEgHaER%26pid%3DApi&f=1&ipt=d3a201e664acf2c83c2c5bf2ac37d3028546a724c60b0d1161e1fd6d15f79cd1&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8J92Uv72cFhGjFcPyrrz8gHaE8%26pid%3DApi&f=1&ipt=8e51daeeba555454afba843fe738f5f4369d8d7e7d61568a4c00b0f5f277a88e&ipo=images',
    
    // Add more image URLs as needed
  ];

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
