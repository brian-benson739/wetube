import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not allowed</h1>");
  }
  console.log("Allowed, you may continue")
  next();
};
  
const handleHome = (req, res) => {
  return res.send("In the middleware");
};

const handleLogin = (req, res) => {
  return res.send("Login here ");
};

const handleRegister = (req, res) => {
  return res.send("Register here");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lodge")
}

// app.use();
app.get("/", logger, handleHome);
app.get("/login", handleLogin);
app.get("/register", handleRegister);

const handleListening = () =>
  console.log(`✔️ server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
