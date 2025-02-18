import { app } from "./config/config.js";

const port = 3000;

function main() {
  app.listen({ port }, (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }

    app.log.info(`Fastify is listening on port: ${address}`);
  });
}

main();
