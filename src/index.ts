import express from "express";
import authRouter from "./routes/auth";
import taskRouter from "./routes/task";

const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/tasks", taskRouter);
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Welcome to my app.!!!!")
});

app.listen(PORT, () => {
    console.log("Server started at port : 8000");

});