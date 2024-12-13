interface IErgebnisAnzeigeProps {
    // String | unknown ging hier nicht, warum? => Weil TypeScript spezifischere Typen bevorzugt.
    playerChoose: string | null;
    computerChoose: string | null;
    result: string | null;
}

const ErgebnisAnzeige: React.FC<IErgebnisAnzeigeProps> = ({ playerChoose, computerChoose, result }) => {
    return (
        <section className="result-bar">
            <p>You choose: {playerChoose}</p>
            <p>CPU choose: {computerChoose}</p>
            <p>Result: {result}</p>
        </section>
    );
}

export default ErgebnisAnzeige;