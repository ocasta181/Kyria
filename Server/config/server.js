import express from "express";
import bodyParser from "body-parser";
import setRoutes from "./routes";

var cors = require('cors');


const server = express();

server.use(cors({origin: "http://localhost:8080"}));
server.use(bodyParser.json());
setRoutes(server);

export default server;