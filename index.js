import express from "express";
import animalsRoute from "./routes/animalsRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/animals", animalsRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
