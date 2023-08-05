const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const port = 5000;
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const userData = {
  email: "captain.america@avenger.com",
  password: "imavenger123"
}

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const secretKey = 'chavesecreta'
  if (userData.email === email && userData.password === password) {
    const token = jwt.sign({ email: userData.username }, secretKey)
    res.json({ token, authenticated: true })
  }

  res.json({ authenticated: false, error: 'Email ou senha incorretos, tente novamente' })
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});