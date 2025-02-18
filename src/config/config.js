import Fastify from "fastify";
import { readFileSync } from "fs";
import routes from "../routes/routes.js";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";

export const app = Fastify({
  http2: true,
  https: {
    allowHTTP1: true,
    key: readFileSync("./server.key"),
    cert: readFileSync("./server.crt"),
  },
  logger: true,
});

app.register(helmet);
app.register(cors);

app.register(routes, { prefix: "/livre" });
