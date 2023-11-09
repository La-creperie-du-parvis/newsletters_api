import express from "express";
import SendRoute from "./src/routes/SendRoute.js";
import bodyParser from "body-parser";
import session from "express-session";
import cors from "cors";
const app = express();
const port = 3010;

const allowedOrigins = ["http://localhost:*"];
const options = {
    origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    session({
        secret: "La_Crêperie_du_Parvis",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(SendRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
