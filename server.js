import express from "express"
import cors from "cors"
import fluxRoute from "./routes/fluxCarRoute.js";
import connectDB from "./config/db.js";
const app = express();

app.use(cors());

app.use('/api/v1/flux', fluxRoute)



app.listen(8000, () => {
  console.log("running");
  connectDB()
});
