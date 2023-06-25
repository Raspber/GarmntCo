const mongoose = require("mongoose");
// These env variables are retrieved from the .env file (which is git ignored).
const uri = process.env.ATLAS_URI;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Datebae connection error:", err)
);
