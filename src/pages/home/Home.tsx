import "./Home.css";
import ButtonAuswahl from "../../components/buttonAuswahl/buttonAuswahl";
import ErgebnisAnzeige from "../../components/ergebnisAnzeige/ergebnisAnzeige";
import { useState, useEffect } from "react";

const weapons: string[] = ["💎", "🪭", "👠"];

// useState für state Auswahl Spieler und Computer, result
const Home: React.FC = () => {
    const [playerChoose, setPlayerChoose] = useState<string | null>(null);
    const [computerChoose, setComputerChoose] = useState<string | null>(null);
    const [result, setResult] = useState<string>("");
// Hier noch mal Hilfe bekommen
  // Funktion für zufällige Auswahl weapons array
const getRandomChoice = (): string => {
    return weapons[Math.floor(Math.random() * weapons.length)];
};
// Hier noch mal Hilfe bekommen
  // Funktion für Setzen der Auswahl des Spielers und Computers 
const handleUserChoice = (choice: string): void => {
    setPlayerChoose(choice);
    setComputerChoose(getRandomChoice());
};

//Hauptspiellogik
// Auswahl abgleichen und Ergebnis setzen
useEffect(() => {
    if (playerChoose && computerChoose) {
        let gameResult: string;

    if (playerChoose === computerChoose) {
        gameResult = "💄 Tie 💄";
    } else if (
        (playerChoose === "👠" && computerChoose === "🪭") ||
        (playerChoose === "💎" && computerChoose === "👠") ||
        (playerChoose === "🪭" && computerChoose === "💎")
    ) {
        gameResult = "Congratulations! You won ✨";
    } else {
        gameResult = "Computer won – 💅🏼relax and try again";
    }
    
    setResult(gameResult);
    }
}, [playerChoose, computerChoose]);

// Reset Button: null wie am Anfang beim Laden der Seite
const resetGame = (): void => {
    setPlayerChoose(null);
    setComputerChoose(null);
    setResult("");
};

return (
    <div className="home">
        <h1>Rock, Paper, Scissors</h1>
        <h3>... but make it Fashion</h3>
        <div className="choices">
            <ButtonAuswahl choice="💎" onClick={handleUserChoice} /> 
            <ButtonAuswahl choice="🪭" onClick={handleUserChoice} /> 
            <ButtonAuswahl choice="👠" onClick={handleUserChoice} />
        </div>
        <ErgebnisAnzeige playerChoose={playerChoose} computerChoose={computerChoose} result={result} />
        <button onClick={resetGame}>Restart Game</button>
    </div>
    );
};

export default Home;