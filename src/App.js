import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import PreGameModal from "./components/modals/PreGameModal";
import StartGameModal from "./components/modals/MainModal";
import { useState } from "react";

function App() {
  const [gameOptions, setGameOptions] = useState(null);

  const startGame = (options) => setGameOptions(options);

  return (
    <div>
      <Header />
      <main>
        {!gameOptions ? (
          <PreGameModal startGame={startGame} />
        ) : (
          <StartGameModal gameOptions={gameOptions} setter={setGameOptions} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
