import express from "express";
import router from "./router.js";
import bodyParser from "body-parser";

let app = express();

app.listen(3000, () => {
	console.log("server up and running");
});

app.use(bodyParser.json());
app.use("/jojo/api", router);
