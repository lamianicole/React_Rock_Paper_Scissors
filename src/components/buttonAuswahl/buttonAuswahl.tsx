interface IButtonAuswahlProps {
    choice: string;
    // Erst mal nur Text(emoji) auf Button, kein Image.
    // Die Funktion nimmt Parameter "choice" vom Typ string entgegen, gibt nichts zurück (void). Funktion wird aufgerufen bei Klick auf Button 
    onClick: (choice: string) => void;
}

const ButtonAuswahl: React.FC<IButtonAuswahlProps> = ({ choice, onClick }) => {
    return (
        <button className="choice-btn" onClick={() => onClick(choice)}>
        {choice}
        </button>
    );
}

export default ButtonAuswahl;

// Hier noch mal Hilfe bekommen...