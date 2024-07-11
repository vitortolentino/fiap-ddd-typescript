import express from "express";
import { OrderRoutes } from "./presentation/routes/OrderRoutes";

const app = express();

app.use(express.json());
app.use(OrderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
