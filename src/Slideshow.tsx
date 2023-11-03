import App_Carousel from "./carousel/js";
import './Slideshow.css'

function Slideshow() {
  return (
    <div className="slideshow">
      <div className="Text_slideshow">
        <h2 className="Description_Projects">My name is mshari And i am a freelance web developer</h2>
        <h2 className="Description_Projects">I make beautiful web apps and here is some of my works and projects</h2>
      </div>
      <App_Carousel/>
    </div>
    
  );
}

export default Slideshow;