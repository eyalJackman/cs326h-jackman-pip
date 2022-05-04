import express from "express";

const app = express();
const port = 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(express.static("client"));

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});