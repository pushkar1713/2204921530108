import express from "express";
import router from "./routes/calculator.router.js";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/api/v1/numbers", router);

app.listen(9876, () => {
  console.log("Server is running on port 9876");
});
