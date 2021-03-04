const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const databaseConnection = require("./config/db");
const productsRoute = require("./routes/productsRoute");

databaseConnection();

dotenv.config();

const app = express();

const Port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// routes
// app.use('/', (req, res) => {
//     res.send("Hello!!!!");
// });

app.use('/api/product', productsRoute);

app.listen(Port, () => {
    console.log(`Server is running on port http://localhost:${Port}`);
});