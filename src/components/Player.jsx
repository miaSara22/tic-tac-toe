import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editabelPlayerName = <span className="player_name">{playerName}</span>;

    if (isEditing) {
        editabelPlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return (

        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editabelPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>

    );
}