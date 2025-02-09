# Random Password Generator

A full-stack **Random Password Generator** built with **React (Frontend)** and **Node.js + Express (Backend)**. This application allows users to generate secure passwords with customizable length and character options.

---

## 🚀 Features

- Generate secure random passwords
- Customize length (4-50 characters)
- Include/exclude numbers and symbols
- Modern, responsive UI with SCSS styling

---

## 📌 Tech Stack

### **Frontend:**
- React
- SCSS (SASS for styling)
- Axios (for API requests)

### **Backend:**
- Node.js
- Express.js
- CORS

---

## 🛠 Setup & Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/MadhawaAponso/password-generator.git
cd password-generator
```

### **2️⃣ Backend Setup**
```sh
cd server
npm install
node server.js
```
The backend will run on **http://localhost:5000**

### **3️⃣ Frontend Setup**
```sh
cd ../password-generator-frontend
npm install
npm start
```
The frontend will run on **http://localhost:3000**

---

## 🔥 API Endpoint
| Method | Endpoint       | Description |
|--------|---------------|-------------|
| POST   | /generate     | Generates a password based on user preferences |

#### **Request Body:**
```json
{
  "length": 12,
  "useNumbers": true,
  "useSymbols": true
}
```
#### **Response:**
```json
{
  "password": "Xy9@Gz!2P$Lm"
}
```

---

## 🎨 UI Preview

The frontend provides an elegant user interface with SCSS styles:

![UI Preview](https://via.placeholder.com/600x300?text=Password+Generator+Preview)

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch and create a Pull Request

---

## 📜 License

This project is open-source under the **MIT License**.

