import React, { useState } from "react";
import axios from "axios";
import "./styles.scss"; // Import SCSS styles

function App() {
    const [length, setLength] = useState(12);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);
    const [password, setPassword] = useState("");

    const generatePassword = async () => {
        try {
            const response = await axios.post("http://localhost:5000/generate", {
                length,
                useNumbers,
                useSymbols,
            });
            setPassword(response.data.password);
        } catch (error) {
            console.error("Error generating password:", error);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Password Generator</h1>
                <div className="options">
                    <label>
                        Length:
                        <input
                            type="number"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            min="4"
                            max="50"
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={useNumbers}
                            onChange={() => setUseNumbers(!useNumbers)}
                        />
                        Include Numbers
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={useSymbols}
                            onChange={() => setUseSymbols(!useSymbols)}
                        />
                        Include Symbols
                    </label>
                </div>
                <button onClick={generatePassword}>Generate Password</button>
                <div className="password-box">{password || "Your password will appear here"}</div>
            </div>
        </div>
    );
}

export default App;
