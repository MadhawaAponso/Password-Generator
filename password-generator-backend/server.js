const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

function generatePassword(length = 12, useNumbers = true, useSymbols = true) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?";

    let characters = letters;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

app.post("/generate", (req, res) => {
    const { length, useNumbers, useSymbols } = req.body;
    const password = generatePassword(length, useNumbers, useSymbols);
    res.json({ password });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
