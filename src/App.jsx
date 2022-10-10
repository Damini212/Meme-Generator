import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Header";
import memesData from "./memesData";

function App() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState({ randomImage: "" });

  function handleTopText(event) {
    setTopText(event.target.value);
  }
  function handleBottomText(event) {
    setBottomText(event.target.value);
  }
  useEffect(() => {
    getImageMeme();
  }, []);

  function getImageMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    setTopText("");
    setBottomText("");
  }

  return (
    <div className="App">
      <Header />
      <div className="inputs-container">
        <input
          type="text"
          placeholder="Top Text"
          onChange={handleTopText}
          value={topText}
          className="inputs"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          onChange={handleBottomText}
          value={bottomText}
          className="inputs"
        />
      </div>

      <button className="btn" onClick={getImageMeme}>
        Get a New Image
      </button>

      <div className="meme-image">
        <img className="image" src={meme.randomImage} />
        <div className="text topText">{topText}</div>
        <div className="text bottomText">{bottomText}</div>
      </div>
    </div>
  );
}

export default App;
