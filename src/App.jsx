import "./style.css";
import titanic from "./assets/titanic.png";
import avengers from "./assets/avengers.png";
import harrypotter from "./assets/harrypotter.png";


function App(){
  return (
    <div className="container">
      <h1>🎬 My Movie Playlist</h1>

      <div className="movie">
        <img src={titanic} alt="Titanic" />
        <h2>Titanic</h2>
      </div>

      <div className="movie">
        <img src={avengers} alt="Avengers" />
        <h2>Avengers: Endgame</h2>
      </div>

      <div className="movie">
        <img src={harrypotter} alt="Harry Potter" />
        <h2>Harry Potter</h2>
      </div>
    </div>
  );
}

export default App;