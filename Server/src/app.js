import express from "express";
import cors from "cors";
import chatRoutes from "../src/routes/chatRoutes.js";
import reviewRoutes from "../src/routes/reviewRoutes.js";
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from server");
});


// Mount API routes
app.use("/api/chat", chatRoutes);
app.use("/api/review", reviewRoutes);

// 404 Route
app.use((req, res) => {
  res.status(404).send("Route Not Found");
});

export default app;





