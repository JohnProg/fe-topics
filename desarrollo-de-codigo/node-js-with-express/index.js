import express from "express";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
