function App() {
  <p>Coming soon...</p>;
  return (
    <main>
      <div id="game-container">
        <ol id="players"></ol>
        <li>
          <span className="player-name">Player 1</span>
          <span className="player-symbol">X</span>
        </li>
        <li>
          {" "}
          <span className="player-name">Player 2</span>
          <span className="player-symbol">O</span>
        </li>
      </div>
    </main>
  );
}

export default App;
